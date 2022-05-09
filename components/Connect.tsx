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
    <div>
      <div>
        {activeConnector && (
          <button onClick={() => disconnect()} className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
            Disconnect from {activeConnector.name}
          </button>
        )}

        {connectors
          .filter((x) => isMounted && x.ready && x.id !== activeConnector?.id)
          .map((x) => (
            <button key={x.id} onClick={() => connect(x)} className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg w-52 m-5">
              {x.name}
              {isConnecting && x.id === pendingConnector?.id && ' (connecting)'}
            </button>
          ))}
      </div>

      {error && <div>{error.message}</div>}
    </div>
  )
}
