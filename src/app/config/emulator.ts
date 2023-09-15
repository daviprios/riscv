import AppError from './appError'

interface EmulatorOptions {
  bitSize: '32' | '64' | '128'
}

export function emulator(options: EmulatorOptions) {
  if (options.bitSize === '128')
    throw new AppError('Cannot use 128 for now, since it is experimental')
}
