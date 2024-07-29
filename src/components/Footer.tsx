import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
          <img
              alt=""
              src="https://media.licdn.com/dms/image/C560BAQEJTLwPwZ28kQ/company-logo_200_200/0/1645005218411/dodao_logo?e=1730332800&v=beta&t=Xe-DKqQST6jNI_uQm9ZZD8GPOhr5pFSyNtAfd6Z4sHM"
              className="h-12 w-auto"
            />
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} DoDAO. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
