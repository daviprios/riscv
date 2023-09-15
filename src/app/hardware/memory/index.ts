import AppError from '@/app/config/appError'

type MemoryIndex = bigint
type MemoryValue = bigint

interface MemoryOptions {
  /**
   * Total size in bytes.
   * Must be multiple of the archtecture legth.
   */
  totalSize: bigint
  archtectureLegth: 16 | 32 | 64 | 128
}

const MB256 = 268_435_456

export default class Memory {
  constructor(options: MemoryOptions) {
    if (options.totalSize > MB256)
      throw new AppError('Cannot alocate more than 256MB')
    if (options.totalSize <= 0)
      throw new AppError('Cannot have zero/negative memory')
    if (
      BigInt(options.totalSize) % BigInt(options.archtectureLegth) !==
      BigInt(0)
    )
      throw new AppError(
        'Total size should match multiple of archtecture length'
      )

    this.memoryMaxSize = options.totalSize
  }

  private memory = new Map<MemoryIndex, MemoryValue>([])
  memoryMaxSize: bigint

  private indexChecker(index: MemoryIndex): never | void {
    if (index >= this.memoryMaxSize || index < 0)
      throw new AppError('Memory - Out of boundaries')
  }

  load(index: MemoryIndex) {
    this.indexChecker(index)
    const value = this.memory.get(index)
    return value ?? 0
  }

  store(index: MemoryIndex, value: MemoryValue) {
    this.indexChecker(index)
    this.memory.set(index, value)
  }

  size() {
    return this.memoryMaxSize
  }
}
