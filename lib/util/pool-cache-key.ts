import { Protocol } from '@ququzone/router-sdk'
import { ChainId } from '@ququzone/sdk-core'

export const S3_POOL_CACHE_KEY = (baseKey: string, chain: ChainId, protocol: Protocol) =>
  `${baseKey}-${chain}-${protocol}`
