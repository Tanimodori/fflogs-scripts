/// <reference types="node" />

import { Parser } from 'acorn';
import { PluginOption } from 'vite';

const plugin: PluginOption = {
  name: 'remove-export',
  enforce: 'post',
  renderChunk(code) {
    const tree = Parser.parse(code, {
      ecmaVersion: 2020,
      sourceType: 'module',
    });
    let result = code;
    // Get the export statment location
    const exportStatments = tree.body.filter((node) => node.type === 'ExportNamedDeclaration');
    // Remove the export statement
    for (let i = exportStatments.length - 1; i >= 0; i--) {
      const exportStatment = exportStatments[i];
      result = result.slice(0, exportStatment.start) + result.slice(exportStatment.end);
    }
    return result;
  },
};

export default plugin;
