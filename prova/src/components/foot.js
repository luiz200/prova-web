import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './foo.css'

function Foot(){
    return(
        <div>    
            <footer className="bg-success" id="foo">
                <p>SIGAA | Superintendência de Informática - | | Copyright © 2006-2022 - UFRN - sigaa27-producao.info.ufrn.br.sigaa27-producao</p>
            </footer>
        </div>
    );
}

export default Foot;