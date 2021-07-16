import {useState} from 'react';
import ContainerHeader from "../../ui/components/containers/ContainerHeader/ContainerHeader";
import ButtonPrimary from "../../ui/components/containers/buttons/ButtonPrimary/ButtonPrimary";
import './styles.css';

const Home = () => {
    
    const listTenis = [
        {
            src: 'https://www.pikpng.com/pngl/b/122-1224184_tenis-nike-air-max-guile-masculino-916768-004.png',
            colorPrimary: '#151413',
            colorSecond: '#313131',
            left: 400,
            top: 200,
            width:1000,
        },
        {
            src: 'https://images.lojanike.com.br/1024x1024/produto/tenis-nike-pg-3-unissex-AO2607-600-1.png',
            colorPrimary: '#B81B30',
            colorSecond: '#f15559',
            left: 350,
            top: -220,
            width:1200,
        },
        {
            src: 'https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-zoom-pegasus-36-masculino-CI1723-700-1.png',
            colorPrimary: '#b59516',
            colorSecond: '#ebc54c',
            left: 350,
            top: -220,
            width:1200,

        }
    ]

    const [tenis, setTenis] = useState(listTenis[0]),
    [onClickScreen,setOnClickScreen] = useState(false),
    [email, setEmail] = useState('');

    const submitEmail = () => {
        localStorage.setItem('@EmailNextPromotions',email);
    }
 
    return <div className="home">
        <ContainerHeader>
            <div className="home__header">
                <div className="home__part-shape" style={{background:tenis.colorPrimary}}/>
                <div>
                    <div className="custom-shape-divider-top-1626303685">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" style={{fill:tenis.colorSecond}}></path>
                        </svg>
                    </div>
                    <div className="custom-shape-divider-top-1626304743">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" style={{fill:tenis.colorPrimary}}></path>
                        </svg>
                    </div>
                </div>
                <img src={tenis.src} className="home__header-image" alt="" style={{position:'absolute', width: tenis.width, left: tenis.left, top:tenis.top}}/>
                <div className="home__header-info">
                    <h1>Air Sports</h1>
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non optio sequi tempora, unde corrupti eum.</h4>
                </div>
                <div className="home__header-buy">
                    <div style={{display:'flex'}}>
                        <h2>$20</h2>
                        <h4 style={{marginTop:50}}>USD</h4>
                    </div>
                    <ButtonPrimary style={{width:'100%', background:tenis.colorSecond}} onClick={() => setOnClickScreen(true)}>Buy</ButtonPrimary>
                </div>
                <div className="home__header-options">
                    {listTenis.map(tenis => (
                        <div className="home__header-option" onClick={() => setTenis(tenis)}>
                            <img src={tenis.src} alt="" />
                        </div>
                    ))}
                </div>
                {
                    onClickScreen &&
                    <div className={onClickScreen?'home__header-screen-open':'home__header-screen'}> 
                        <div>
                            <div className="home__screen-promotion">
                                <h2 style={{color:'#fff', fontWeight:100}}>Oferta Esgotada!</h2>
                                <h3 style={{color:'#fff', fontWeight:100, fontSize:28}}>Mas não fique chateado(a) cadastre seu e-mail para receber nossas proximas promoções, Corre!</h3>
                                <input style={{width:600}} placeholder="E-mail" className="input-custom" onChange={e=>setEmail(e.target.value)}/>
                                <ButtonPrimary style={{width: 200, background:tenis.colorSecond, marginTop: 15}} onClick={() => submitEmail()}>Eu Quero</ButtonPrimary>
                            </div>
                            
                            <div className="home__header-screen-close-button" onClick={()=>setOnClickScreen(false)}>X</div>
                        </div>
                    </div>
                }
            </div>
            
        </ContainerHeader>
    </div>
}

export default Home;