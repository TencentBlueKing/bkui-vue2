#!/usr/bin/env node

import { ComponentDocumentationParser } from "./parser.js";
import path from "path";
import fs from 'fs-extra';

async function debugParser() {
  console.log("🔍 Debug Parser for Button Component...\n");

  const componentsPath = path.resolve(process.cwd(), '../example/components');
  const buttonReadmePath = path.join(componentsPath, 'button', 'readme.md');
  
  console.log(`Reading: ${buttonReadmePath}`);
  
  const content = await fs.readFile(buttonReadmePath, 'utf-8');
  
  // 查找属性部分
  console.log("\n1. 🔍 Looking for properties section...");
  const propMatch = content.match(/###\s*属性[^#\n]*\n([\s\S]*?)(?=\n###|\n##|$)/);
  if (propMatch) {
    console.log("✅ Found properties section:");
    console.log("Raw match:", propMatch[1].substring(0, 200) + "...");
    
    const tableContent = propMatch[1];
    const rows = tableContent.split('\n').filter(line => line.includes('|') && line.trim() !== '');
    console.log(`Found ${rows.length} table rows:`);
    
    rows.forEach((row, index) => {
      console.log(`Row ${index}: ${row}`);
      if (index >= 2) { // Skip header and separator
        const cells = row.split('|').map(cell => cell.trim()).filter(cell => cell !== '');
        console.log(`  Cells (${cells.length}):`, cells);
      }
    });
  } else {
    console.log("❌ No properties section found");
  }

  // 查找事件部分
  console.log("\n2. 🔍 Looking for events section...");
  const eventMatch = content.match(/###\s*事件[^#\n]*\n([\s\S]*?)(?=\n###|\n##|$)/);
  if (eventMatch) {
    console.log("✅ Found events section:");
    console.log("Raw match:", eventMatch[1].substring(0, 200) + "...");
    
    const tableContent = eventMatch[1];
    const rows = tableContent.split('\n').filter(line => line.includes('|') && line.trim() !== '');
    console.log(`Found ${rows.length} table rows:`);
    
    rows.forEach((row, index) => {
      console.log(`Row ${index}: ${row}`);
      if (index >= 2) { // Skip header and separator
        const cells = row.split('|').map(cell => cell.trim()).filter(cell => cell !== '');
        console.log(`  Cells (${cells.length}):`, cells);
      }
    });
  } else {
    console.log("❌ No events section found");
  }

  // 查找示例部分
  console.log("\n3. 🔍 Looking for examples...");
  const demoRegex = /:::demo\s*(.*?)\n([\s\S]*?):::/g;
  let match;
  let exampleCount = 0;
  
  while ((match = demoRegex.exec(content)) !== null) {
    exampleCount++;
    console.log(`Example ${exampleCount}:`);
    console.log(`  Description: ${match[1].trim()}`);
    console.log(`  Content length: ${match[2].length}`);
    
    const codeMatch = match[2].match(/```(\w+)\n([\s\S]*?)```/);
    if (codeMatch) {
      console.log(`  Language: ${codeMatch[1]}`);
      console.log(`  Code length: ${codeMatch[2].length}`);
    }
  }
  
  if (exampleCount === 0) {
    console.log("❌ No examples found");
  }

  // 测试实际解析器
  console.log("\n4. 🧪 Testing actual parser...");
  const parser = new ComponentDocumentationParser(componentsPath);
  const doc = await parser.getComponentDocumentation('button');
  
  if (doc) {
    console.log(`✅ Parser results:`);
    console.log(`  Properties: ${doc.properties.length}`);
    console.log(`  Events: ${doc.events.length}`);
    console.log(`  Examples: ${doc.examples.length}`);
    
    if (doc.properties.length > 0) {
      console.log("  First property:", doc.properties[0]);
    }
    if (doc.events.length > 0) {
      console.log("  First event:", doc.events[0]);
    }
  }
}

debugParser().catch(console.error);
