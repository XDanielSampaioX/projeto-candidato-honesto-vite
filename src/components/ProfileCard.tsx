import { memo } from "react";
import Links from "../assets/Links";

type ProfileCardProps = {
    profilePic?: string;
    name: string;
    linkedin: string;
    github: string;
    instagram: string
}

const ProfileCard = ({ profilePic, name, linkedin, github, instagram }: ProfileCardProps) => {
    return (
        <>
            <div className="flex text-nowrap flex-col items-center text-center max-h-80 w-full p-14 rounded-3xl shadow-md transition duration-500 bg-white hover:scale-105 ">
                <div className="bg-blue-600 p-0.5 rounded-full mb-2.5 w-40 h-40">
                    <img src={profilePic} alt="profileImg" className="w-full h-full object-cover rounded-full border border-white border-spacing-0.5 " />

                </div>

                <div className="info flex flex-col items-center text-slate-700">
                    <span className="name text-2xl font-normal">{name}</span>
                </div>

                <div className="flex items-center gap-2">
                    <Links
                        link={linkedin}
                        imgBase64={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAN1JREFUSEvtlEEOgjAURGduoi70GOp1TFyYeAA9gIkx8TzqLVy40Is4gqGEfigYCgsT2LX8zvud+SnR88ee9VECSJoAeJN8dgH3AJJOANaZ8IHkNhaSAyTNANyN4IjkKwbSBBjHWmUtOgNYZR0fSW5iuk/PVoU8zUJ+xIqXAJIWRVGS13TdsD8HcHO1tilrkQzg+1+St58ILgFcKm64I7n3NIoLK5QUhwBB99wZV9D2BrXxFCFtAVeSqU0uH8+uaIC1IWRt1RT9FPIAyCckNKaDRf1Z1MXrWfvY/SXgA75Wshm2zqk4AAAAAElFTkSuQmCC"}
                        className={"bg-blue-600"}>
                    </Links>

                    <Links
                        link={github}
                        imgBase64={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASNJREFUSEu1lQ0OgyAMhduTTU82PZl6ss4aII9apCaDxGzLoB+vP0+mwYsHx6cuQEQmIvoQkX7qo2tPz8HM+r25moAU+AtB20GYm3HcP0REAy8v07cw82rP3ADp5tvL4Hn7DVIBTPCdmWejJuc710JVHmeNyoVOFVVMC9CNpZAKiCixKUVIATipuRQEAXgxigLmXgsi/FQh8LvUAhU0bxFUgYCiAgHuhkhw3SMi7gX/CRiuAAGlQVCBnd43XdQ8a+egkql24Y1/rgsYobWV0oEuQPvYTrCdCVtUaIZKuedFl4oEQQuohu4BUM2PB8j57KXHc9xns4Pc4mE1uNVOtWPpMbs245+H53YYAO4FcpzuKzNN6eT5knZRz69CgKhdePuGA34TLLUZEVaecAAAAABJRU5ErkJggg=="}
                        className={"bg-black"}>
                    </Links>

                    <Links
                        link={instagram}
                        imgBase64={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUhJREFUSEvFVcFtwzAMvFui38yQCZp88usImaXJKB2jr7ardIMOUDCiIRq0RNlWAiMGjDgQwTseyROx8cON8+M5ACJyAPAKQH/1XXouJK9RUFWBiLynwEsO/k4A+s49nkQFNAHIzL80KcnjEm1/noiJ/k+VTHKWAJr8UAa1gETknHKqNH8k9xFICRCyUIAs3YilmovICcAngF+Su7UAE3mybNqXqNlvAP4BvJD8uBdgkE0bb5PiB8HLKSKVxJFEYwWu6dV02Nk9AJ7pbNOzJLPxUQWVFK2pehggT49OViSRLeSR5LCM3T1wAPo5gDgb0W0vJ66vyTb0xqxYOGV9NfY9FVTr3lq0csPX7EGXVRRepLtS+Vjkpk27mPEkTW7bPjZ9ML+gTGNiR2bdrfzr7boo2RgtXTh2Z/z4hluu51yZPRfNUuzmFdwA35bqGWdhC4oAAAAASUVORK5CYII="}
                        className={"bg-pink-600"}>
                    </Links>
                </div>
            </div>
        </>
    )
};

export default memo(ProfileCard);