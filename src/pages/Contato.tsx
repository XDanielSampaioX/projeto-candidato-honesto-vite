import ProfileCard from "../components/ProfileCard"
import kaio from '../fotos/kaio.png'
import Daniel from '../fotos/Daniel.jpg'
import Savio from '../fotos/Savio.jpeg'

export default function Contato() {
    return (
        <>
            <div className=" h-screen w-full flex items-center justify-center max-lg: m-40">
                <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-16 m-5">
                    <ProfileCard name="Sávio Limão" profilePic={Savio} linkedin="https://br.linkedin.com/in/saviolimao" github="http://github.com/saviolimao" instagram="https://www.instagram.com/saviolimao/" />
                    <ProfileCard name="Daniel Sampaio" profilePic={Daniel} linkedin="https://www.linkedin.com/in/daniel-sampaio-fs/" github="https://github.com/XDanielSampaioX" instagram="https://www.instagram.com/danielsampaio230/" />
                    <ProfileCard name="Kaio Mendes" profilePic={kaio} linkedin="https://www.linkedin.com/in/kaiomendesbr/" github="https://github.com/kaiomendes15" instagram="https://www.instagram.com/kaiomendes__/" />
                    <ProfileCard name="Jefferson Leite" profilePic={kaio} linkedin="https://www.linkedin.com/in/jefferson-leite-16318742/" github="https://github.com/JeffLeite91" instagram="https://www.instagram.com/jeffleite/" />
                </div>
            </div>
        </>
    )
};
