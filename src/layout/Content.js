import React,{useEffect,useState} from 'react'
import { Yildiz } from '../icon/icon'
import indir from "../img/indir.png"
import TweetBox from "../componenets/TweetBox"
import Dvider from '../componenets/Dvider'
import TweetList from "../componenets/TweetList"

const Content = () => {

    const [tweetler,setTweetler] = useState([])

    useEffect(() => {

        setTweetler([
            {"id":0,"tw":"Yine madem facebook insta ve whasapp cuuuu... O zaman sunu suraya birakayim, elden ele size zahmet... "},
            {"id":1,"tw":"Partisia Blockchain is built for trust, transparency, privacy, and speed of light finalization by combining secure multiparty computation (MPC) and blockchain."},
            {"id":2,"tw":"Dünyanın en büyük çağrı merkezi hizmeti veren firması TTEC hacklendi. 60.000 çalışana sahip firmaya saldıran Ragnar Locker grubu kritik verileri şifreleyip Windows sistemlerin Start menüsüne  diye bir seçenek ekledi."},
            {"id":3,"tw":"ShinyHunters hacker grubu 70 milyon AT&T müşterisine ait verileri hacklediğini açıkladı. Tüm veritabanı için istenilen rakam 1 milyon dolar. AT&T ise verilerin sızdırıldığını kabul etmiyor. Hackerlar verilerle ilgili gayet gerçekçi gözüken örnekler de yayınladı."},
            {"id":4,"tw":"AIG ve Chubb sigorta firmalarının CEO'ları siber risklerin artışıyla birlikte müşterilerinin sigorta primlerinde yaklaşık %40 kadar artış olduğunu açıkladı. Sigorta taleplerinin %75'ini fidye yazılımları oluşturuyor."},
            {"id":5,"tw":"California merkezli Scripps Health adlı hastane zinciri zor günler geçiriyor. Uğradığı fidye saldırısı sonucu 106 milyon dolar zarar eden hastane, sadece verileri kurtarmak ve güvenlik yatırımları için 21 milyon dolar harcadı. 150 bin hastanın verileri çalındı."}
        ])

    }, [])
 

    return (
        <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
            <header className=" sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLigh bg-white">
                <span className="font-bold text-xl text-gray-900" >Home</span>
                <Yildiz className="w-6 h-6 text-primary-base" />
            </header>

            <div className="flex space-x-4 px-4 py-3">
                <img src={indir}  alt="Profile" className="w-11 h-11 rounded-full" />
                
                
                    <TweetBox className="w-6 h-6 text-primary-base" />
               
            </div>
            <Dvider />

            <TweetList tweets={tweetler} />

        </main>
    )
}

export default Content
