import { GITHUB_REPO_URL } from 'util/constants'

import { Container } from 'components/ui/Container'

const Footer = () => {
  return (
    <footer className="border-t py-6">
      <Container>
        <div className="flex justify-between text-tiny items-start">
          <div className="flex flex-col md:flex-row leading-6">
            <span>
              Brought to you by{' '}
              <a
                className="underline"
                href="https://comitylabs.com"
                target="_blank"
                rel="noreferrer"
              >
                Comity Labs
              </a>
              .
            </span>

            <span className="md:mx-2">
              Powered by{' '}
              <a
                className="underline"
                href="https://github.com/ethereumjs/ethereumjs-monorepo"
                target="_blank"
                rel="noreferrer"
              >
                EthereumJS
              </a>{' '}
              and{' '}
              <a
                className="underline"
                href="https://github.com/ethereum/solc-js"
                target="_blank"
                rel="noreferrer"
              >
                SolcJS
              </a>
              .
            </span>
          </div>

          <div>
            <a
              className="underline"
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
