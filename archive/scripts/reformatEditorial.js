// File: scripts/reformatEditorial.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const editorialDir = path.join(process.cwd(), 'src/content/editorial');

function reformatArticles() {
  const files = fs.readdirSync(editorialDir).filter(file => file.endsWith('.md'));

  files.forEach(file => {
    const filePath = path.join(editorialDir, file);
    const rawContent = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(rawContent);

    const { data, content } = parsed;

    // Minimal fixes
    const title = data.title || path.basename(file, '.md').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const date = data.date || new Date().toISOString().split('T')[0];
    const excerpt = data.excerpt || content.split('. ')[0].trim() + '.';

    const newFrontmatter = `---\ntitle: "${title}"\ndate: "${date}"\nexcerpt: "${excerpt}"\n---\n\n`;

    const newContent = newFrontmatter + content.trim() + '\n';

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Reformatted: ${file}`);
  });
}

reformatArticles();
