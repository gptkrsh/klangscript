import ts from 'typescript';
import keywords from './lang.json'

export function klangscript(source: string) {
  let output: string = source

  for (const [js, klangscript] of Object.entries(keywords)) {
    output = output.replace(new RegExp(klangscript, 'g'), js);
  }

  const { outputText: code } = ts.transpileModule(output, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      allowJs: true
    }
  })

  return code
}

export default klangscript
