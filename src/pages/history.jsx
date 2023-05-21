// Imports
import Head from "next/head"
import { useEffect, useState } from "react"

import NavBar from "@/web/components/Navbar"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Title from "@/web/components/Title"
import CommandsHistory from "@/web/components/CommandsHistory"
import api from "@/web/services/api"

// History function
const History = () => {
    const [history, setHistory] = useState([])

    useEffect(() => {
        ;(async () => {
          try {
            const {
              data: { result },
            } = await api.get("/command")
    
            setHistory(result)
          } catch (err) {
            return
          }
        })()
      }, )

    return (
        <>
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.svg" />
              <title>Net Mapper</title>
            </Head>
            
            <Main>
                <NavBar />
                <Title titleLabel="History" />
                <div className="w-3 mt-3.5 mx-auto">
                    {history.map(({ result, _id }, index) => (
                      <CommandsHistory key={index} result={result} id={_id}>
                        <div className="flex justify-between mt-4 text-white"></div>
                      </CommandsHistory>
                    ))}
                </div>
            </Main>
            <Footer />
        </>
    )
}

export default History
