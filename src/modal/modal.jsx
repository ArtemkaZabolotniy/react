import './modal.css'
import { useState } from 'react';

const modal = {
    name:'Open modal',
    class:'modal',
}

const Modal = () => {
    let [active, setActive] = useState(true);
    const change = ( ) => {
        setActive(active = false);
    }
    return (
        <div className="modal_window">
            <button className={modal.class} onClick={() => setActive(!active)}>
                    {modal.name}
            </button>
            <main
            style = {{
                opacity: active ? 1 : 0,
                pointerEvents:active ? 'all' : 'none'
            }}
            > 
            <div className="content">
                <h1>Modal<br/></h1>
                <button onClick={change}>close</button>
            </div>
            </main>
        </div>
    )
  }
export default Modal;