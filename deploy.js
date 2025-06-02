// Simple script to deploy to GitHub Pages
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GitHub repository information
const username = 'piyushh-ai';
const repoName = 'AtlasIQ';

// Build the project
console.log('Building the project...');
execSync('npm run build', { stdio: 'inherit' });

// Navigate to the dist directory
const distPath = path.join(__dirname, 'dist');
process.chdir(distPath);

// Create a .nojekyll file to prevent Jekyll processing
fs.writeFileSync('.nojekyll', '');

// Initialize Git repository in the dist directory
console.log('Initializing Git repository in the dist directory...');
execSync('git init', { stdio: 'inherit' });
execSync('git add .', { stdio: 'inherit' });
execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });

// Add the GitHub repository as a remote and force push
console.log(`Pushing to https://github.com/${username}/${repoName}.git...`);
execSync(`git remote add origin https://github.com/${username}/${repoName}.git`, { stdio: 'inherit' });
execSync('git push -f origin HEAD:gh-pages', { stdio: 'inherit' });

console.log('Deployment complete!');
console.log(`Your site should be available at: https://${username}.github.io/${repoName}/`);
