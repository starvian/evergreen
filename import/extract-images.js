const fs = require('fs');
const path = require('path');

// 配置
const config = {
  sourceDir: path.join(__dirname, 'raw-pages'),
  targetDir: path.join(__dirname, '..', 'public', 'images', 'posts')
};

// 检查文件是否为图片（通过文件头）
function isImageFile(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    if (buffer.length < 4) return false;
    
    // 检查常见图片格式的文件头
    const header = buffer.toString('hex', 0, 4).toLowerCase();
    
    // JPEG: ffd8
    if (header.startsWith('ffd8')) return { ext: '.jpg', type: 'JPEG' };
    
    // PNG: 89504e47
    if (header === '89504e47') return { ext: '.png', type: 'PNG' };
    
    // GIF: 47494638
    if (header === '47494638') return { ext: '.gif', type: 'GIF' };
    
    // WebP: 52494646 (RIFF)
    if (header === '52494646') {
      const webpHeader = buffer.toString('hex', 8, 12);
      if (webpHeader === '57454250') return { ext: '.webp', type: 'WebP' };
    }
    
    return false;
  } catch (error) {
    console.error(`检查文件失败: ${filePath}`, error.message);
    return false;
  }
}

// 复制图片文件
function copyImageFile(sourcePath, targetPath) {
  try {
    // 确保目标目录存在
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`✓ 复制成功: ${path.basename(sourcePath)} -> ${targetPath}`);
    return true;
  } catch (error) {
    console.error(`✗ 复制失败: ${sourcePath} -> ${targetPath}`, error.message);
    return false;
  }
}

// 主处理函数
function extractImages() {
  console.log('开始提取图片...');
  console.log('源目录:', config.sourceDir);
  console.log('目标目录:', config.targetDir);
  
  // 查找所有保存的网页文件夹
  const entries = fs.readdirSync(config.sourceDir, { withFileTypes: true });
  
  entries.forEach(entry => {
    if (entry.isDirectory() && entry.name.includes('_files')) {
      const sourceFolder = path.join(config.sourceDir, entry.name);
      console.log(`\n处理文件夹: ${entry.name}`);
      
      // 确定目标文件夹名称
      let targetFolderName;
      if (entry.name.includes('故里寻踪') || entry.name.includes('滕王阁')) {
        targetFolderName = 'tengwangge-visit';
      } else if (entry.name.includes('庐山')) {
        targetFolderName = 'lushan-journey';
      } else {
        targetFolderName = 'chinese-school';
      }
      
      const targetFolder = path.join(config.targetDir, targetFolderName);
      
      // 自动扫描文件夹中的所有文件，寻找图片
      const files = fs.readdirSync(sourceFolder);
      const imageFiles = [];
      
      // 筛选出图片文件
      files.forEach(fileName => {
        const sourcePath = path.join(sourceFolder, fileName);
        
        if (fs.statSync(sourcePath).isFile()) {
          const imageInfo = isImageFile(sourcePath);
          if (imageInfo) {
            imageFiles.push({ fileName, imageInfo, sourcePath });
          }
        }
      });
      
      console.log(`  发现 ${imageFiles.length} 个图片文件`);
      
      // 按文件名排序，确保一致的顺序
      imageFiles.sort((a, b) => {
        // 优先处理数字文件名（如 640, 640(1) 等）
        const aNum = parseInt(a.fileName.match(/\d+/)?.[0] || '999999');
        const bNum = parseInt(b.fileName.match(/\d+/)?.[0] || '999999');
        if (aNum !== bNum) return aNum - bNum;
        return a.fileName.localeCompare(b.fileName);
      });
      
      // 复制图片文件
      imageFiles.forEach((file, index) => {
        // 根据索引生成目标文件名
        let targetFileName;
        if (index === 0) {
          targetFileName = `cover${file.imageInfo.ext}`;
        } else {
          targetFileName = `image-${index}${file.imageInfo.ext}`;
        }
        
        const targetPath = path.join(targetFolder, targetFileName);
        
        console.log(`  发现图片: ${file.fileName} (${file.imageInfo.type})`);
        copyImageFile(file.sourcePath, targetPath);
      });
    }
  });
  
  console.log('\n图片提取完成！');
}

// 运行脚本
if (require.main === module) {
  extractImages();
}

module.exports = { extractImages, isImageFile, copyImageFile };