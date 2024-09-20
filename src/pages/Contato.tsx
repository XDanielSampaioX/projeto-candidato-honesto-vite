import ProfileCard from "../components/ProfileCard"
import kaio from '../fotos/kaio.png'
import Savio from '../fotos/Savio.jpeg'

export default function Contato() {
    return (
        <>
            <div className="h-screen w-full  flex items-center justify-center encapsulador">
                <ProfileCard name="Sávio Limão" profilePic={Savio}  linkedin="https://br.linkedin.com/in/saviolimao" github="http://github.com/saviolimao" instagram="https://www.instagram.com/saviolimao/" />
                
                <ProfileCard name="seu-nome"  linkedin="SEU-LINK" github="SEU-LINK" instagram="SEU-LINK" />

                <ProfileCard name="Kaio Mendes" profilePic={kaio} linkedin="https://www.linkedin.com/in/kaiomendesbr/" github="https://github.com/kaiomendes15" instagram="https://www.instagram.com/kaiomendes__/" />

                <ProfileCard name="seu-nome"  linkedin="SEU-LINK" github="SEU-LINK" instagram="SEU-LINK" />
                
            </div>

        </>
    )
};
