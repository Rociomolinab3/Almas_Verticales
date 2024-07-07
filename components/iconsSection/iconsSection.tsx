import LogoHiking from '@/assets/logos/hiking.svg';
import LogoFitness from '@/assets/logos/fitness.svg';
import LogoHands from '@/assets/logos/handshake.svg';
import LogoTactic from '@/assets/logos/tactic.svg';
import LogoPlay from '@/assets/logos/play.svg';
import LogoAltitude from '@/assets/logos/altitude.svg';

export const IconsSection = () => {
    return (
        <section className="bg-gray-900 py-4 px-4">
            <div className="flex flex-col items-center justify-evenly text-lg text-turquesa text-center md:flex-row">
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                    <LogoFitness width="50" height="50" />
                    <p>RUTINAS</p>
                </div>
                <hr className="text-turquesa bg-turquesa w-[10%] h-1 md:w-1 md:h-16 rounded-md" />
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                    <LogoHands width="50" height="50" />
                    <p>SPONSORS</p>
                </div>
                <hr className="text-turquesa bg-turquesa w-[10%] h-1 md:w-1 md:h-16 rounded-md" />
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                    <LogoTactic width="50" height="50" />
                    <p> NUESTRO PROYECTO</p>
                </div>
                <hr className="text-turquesa bg-turquesa w-[10%] h-1 md:w-1 md:h-16 rounded-md" />
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                    <LogoAltitude width="50" height="50" />
                    <p>PUNTOS MÁS ALTOS</p>
                </div>
            </div>
        </section>
    );
}