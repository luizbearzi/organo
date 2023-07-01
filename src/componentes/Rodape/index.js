import './Rodape.css'

const Rodape = () => {
    return (
        <footer>
            <img src="/imagens/fundo.png" alt="Rodape" className="rodape-imagem" />
            <div className="icones">
                <a href="https://facebook.com"><img src="/imagens/fb.png" alt="Ícone do Facebook" /></a>
                <a href="https://twitter.com"><img src="/imagens/tw.png" alt="Ícone do Twitter" /></a>
                <a href="https://instagram.com"><img src="/imagens/ig.png" alt="Ícone do Instagram" /></a>
            </div>

            <img src="/imagens/logo.png" alt="Logo do Organo" />

            <p>Desenvolvido por Luiz Bearzi</p>

        </footer>
    )
}

export default Rodape