import { useConnect, useDisconnect } from 'wagmi'

import { useIsMounted } from '../components/hooks/useIsMounted'

export function Connect() {
  const isMounted = useIsMounted()
  const {
    activeConnector,
    connect,
    connectors,
    error,
    isConnecting,
    pendingConnector,
  } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <>
      <div className="grid" style={{ gap: '5px' }}>
        {activeConnector ? (
          <button
            onClick={() => disconnect()}
            className="px-4 py-2 text-sm text-stone-600 flex flex-row hover:bg-stone-100"
          >
            Disconnect {activeConnector.name}
          </button>
        ) : (
          connectors.map((x) => (
            <button
              key={x.id}
              onClick={() => connect(x)}
              className="px-4 py-2 text-sm text-stone-600 flex flex-row hover:bg-stone-100"
            >
              {x.name}
              {isConnecting && x.id === pendingConnector?.id && ' (connecting)'}
            </button>
          ))
        )}
      </div>

      {error && <div>{error.message}</div>}
    </>
  )
}
