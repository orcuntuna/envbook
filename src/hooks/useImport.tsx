export enum SupportedImportFormat {
  SIMPLE = 'SIMPLE',
}

type ParsedVariables = Array<{ key: string; value: string | null }>

export const useImport = () => {
  const supportedParsers: Record<SupportedImportFormat, (content: string) => ParsedVariables> = {
    [SupportedImportFormat.SIMPLE]: (content: string) => {
      const result = []
      const lines = content.split('\n')

      for (const line of lines) {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)

        if (match !== null) {
          const key = match[1]
          let value = match[2] ?? null

          const len = value !== null ? value.length : 0
          if (len > 0 && value!.charAt(0) === '"' && value!.charAt(len - 1) === '"') {
            value = value!.replace(/\\n/gm, '\n').replace(/(^"|"$)/g, '')
          } else {
            value = value!.replace(/\\n/gm, '\n')
          }

          result.push({ key, value })
        }
      }

      return result
    },
  }

  const parseEnv = (content: string, format: SupportedImportFormat): ParsedVariables => {
    return supportedParsers[format](content)
  }

  return { parseEnv }
}
