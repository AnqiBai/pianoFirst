import React from 'react'; 
import Key from './Key';

class Piano extends React.Component {
    constructor(props){
        super(props); 
    }
    
    render() {
        return (
            <div className='piano' >
                <Key keyType={'Whitekey'} note={'A0'} />
                <Key keyType={'Whitekey'} note={'B0'} />

                <Key keyType={'Whitekey'} note={'C1'} />
                <Key keyType={'Whitekey'} note={'D1'} />
                <Key keyType={'Whitekey'} note={'E1'} />
                <Key keyType={'Whitekey'} note={'F1'} />
                <Key keyType={'Whitekey'} note={'G1'} />
                <Key keyType={'Whitekey'} note={'A1'} />
                <Key keyType={'Whitekey'} note={'B1'} />

                <Key keyType={'Whitekey'} note={'C2'} />
                <Key keyType={'Whitekey'} note={'D2'} />
                <Key keyType={'Whitekey'} note={'E2'} />
                <Key keyType={'Whitekey'} note={'F2'} />
                <Key keyType={'Whitekey'} note={'G2'} />
                <Key keyType={'Whitekey'} note={'A2'} />
                <Key keyType={'Whitekey'} note={'B2'} />

                <Key keyType={'Whitekey'} note={'C3'} />
                <Key keyType={'Whitekey'} note={'D3'} />
                <Key keyType={'Whitekey'} note={'E3'} />
                <Key keyType={'Whitekey'} note={'F3'} />
                <Key keyType={'Whitekey'} note={'G3'} />
                <Key keyType={'Whitekey'} note={'A3'} />
                <Key keyType={'Whitekey'} note={'B3'} />

                <Key keyType={'Whitekey'} note={'C4'} />
                <Key keyType={'Whitekey'} note={'D4'} />
                <Key keyType={'Whitekey'} note={'E4'} />
                <Key keyType={'Whitekey'} note={'F4'} />
                <Key keyType={'Whitekey'} note={'G4'} />
                <Key keyType={'Whitekey'} note={'A4'} />
                <Key keyType={'Whitekey'} note={'B4'} />

                <Key keyType={'Whitekey'} note={'C5'} />
                <Key keyType={'Whitekey'} note={'D5'} />
                <Key keyType={'Whitekey'} note={'E5'} />
                <Key keyType={'Whitekey'} note={'F5'} />
                <Key keyType={'Whitekey'} note={'G5'} />
                <Key keyType={'Whitekey'} note={'A5'} />
                <Key keyType={'Whitekey'} note={'B5'} />

                <Key keyType={'Whitekey'} note={'C6'} />
                <Key keyType={'Whitekey'} note={'D6'} />
                <Key keyType={'Whitekey'} note={'E6'} />
                <Key keyType={'Whitekey'} note={'F6'} />
                <Key keyType={'Whitekey'} note={'G6'} />
                <Key keyType={'Whitekey'} note={'A6'} />
                <Key keyType={'Whitekey'} note={'B6'} />

                <Key keyType={'Whitekey'} note={'C7'} />
                <Key keyType={'Whitekey'} note={'D7'} />
                <Key keyType={'Whitekey'} note={'E7'} />
                <Key keyType={'Whitekey'} note={'F7'} />
                <Key keyType={'Whitekey'} note={'G7'} />
                <Key keyType={'Whitekey'} note={'A7'} />
                <Key keyType={'Whitekey'} note={'B7'} />

                <Key keyType={'Whitekey'} note={'C8'} />
                
            </div>
        );
    }
}

export default Piano; 



 