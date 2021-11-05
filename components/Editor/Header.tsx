import { useContext, useMemo, ChangeEvent } from 'react'

import { useRegisterActions } from 'kbar'

import { EthereumContext } from 'context/ethereumContext'

import { Button, Radio } from 'components/ui'

import { CodeType } from './types'

type Props = {
  isBytecode: boolean
  isRunDisabled: boolean
  onCodeTypeChange: (event: ChangeEvent<HTMLInputElement>) => void
  onRun: () => void
}

const EditorHeader = ({
  isBytecode,
  onCodeTypeChange,
  onRun,
  isRunDisabled,
}: Props) => {
  const { selectedChain, selectedFork } = useContext(EthereumContext)

  const actions = useMemo(
    () => [
      {
        id: 'run',
        name: 'Run',
        shortcut: ['r'],
        keywords: 'execution run',
        section: 'Execution',
        perform: onRun,
        subtitle: 'Start execution',
      },
    ],
    [onRun],
  )

  useRegisterActions(actions)

  return (
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-md hidden xl:block">
        Running on {selectedChain?.name}{' '}
        <span className="capitalize text-sm text-gray-700 font-medium px-1">
          {selectedFork}
        </span>
      </h3>

      <div className="flex items-center justify-between w-full xl:w-auto">
        <div>
          <Radio
            text="Solidity"
            value={CodeType.Solidity.toString()}
            isChecked={!isBytecode}
            onChange={onCodeTypeChange}
          />

          <Radio
            text="Bytecode"
            value={CodeType.Bytecode.toString()}
            isChecked={isBytecode}
            onChange={onCodeTypeChange}
          />
        </div>

        <Button
          onClick={onRun}
          disabled={isRunDisabled}
          size="sm"
          className="ml-3"
        >
          Run
        </Button>
      </div>
    </div>
  )
}

export default EditorHeader
