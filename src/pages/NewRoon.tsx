import { Link } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import '../styles/auth.scss'

export function NewRoom() {
    return (
         <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração perguntas e respostas" />
                <strong>Criar Salas de &amp; ao vivo</strong>
                <p>Tire dúvidas</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form action="">
                        <input 
                            type="text" 
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>Quer mesmo entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}