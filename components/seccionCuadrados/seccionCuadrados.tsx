import LogoHiking from '@/assets/logos/hiking.svg';
import LogoFitness from '@/assets/logos/fitness.svg';
import LogoHands from '@/assets/logos/handshake.svg';
import LogoTactic from '@/assets/logos/tactic.svg';
import LogoPlay from '@/assets/logos/play.svg';
import LogoAltitude from '@/assets/logos/altitude.svg';

export const SeccionCuadrados = () => {
    return (
        <section className="bg-azulOscuro py-20">
             <div className="container mx-auto flex justify-around text-lg text-turquesa text-center">
            <div>
            <LogoHiking width="50" height="50" />
                <p>ITINERARIOS</p>
            </div>
            <div>
            <LogoFitness width="50" height="50" />
                <p className="">RUTINAS</p>
            </div>
            <div>
            <LogoHands width="50" height="50" />
                <p className="">SPONSORS</p>
            </div>
            <div>
            <LogoTactic width="50" height="50" />
                <p className="">NUESTRO PROYECTO</p>
            </div>
            <div>
            <LogoPlay width="50" height="50" />
                <p className="">VIDEOS</p>
            </div>
            <div>
            <LogoAltitude width="50" height="50" />
                <p className="">PUNTOS MÁS ALTOS</p>
            </div>
        </div>
        </section>
    )
}