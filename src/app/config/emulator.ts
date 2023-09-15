import AppError from './appError'

interface EmulatorOptions {
  bitSize: 16 | 32 | 64 | 128
}

export function emulator(options: EmulatorOptions) {
  if (
    options.bitSize === 16 ||
    options.bitSize === 64 ||
    options.bitSize === 128
  )
    throw new AppError(
      `Cannot use ${options.bitSize} for now, since it is experimental`
    )
}
