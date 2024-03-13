
export function Quote({ quote, by, extra }: { quote: string, by: string, extra: string }) {
  return (
    <div className="flex flex-col justify-center gap-2 w-3/5" >
      <p className="text-3xl font-bold my-3">{quote}</p>
      <div>
        <p className="text-lg font-normal">{by}</p>
        <p className="text-gray-500">{extra}</p>
      </div>
    </div>
  )

}
