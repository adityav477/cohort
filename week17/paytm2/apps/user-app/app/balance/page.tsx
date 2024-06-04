'use client'
// import { useBalance } from "../../../../packages/store/src/hooks/useBalance";
import { useBalance } from "@repo/store/useBalance"

export default function useBalanceCheck() {
  const balance = useBalance();
  return (
    <div>
      hi balance is {balance}
    </div>
  )
}



