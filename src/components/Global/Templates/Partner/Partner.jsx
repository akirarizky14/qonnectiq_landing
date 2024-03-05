import React from 'react'
import '../../../../css/Global/Template/Partner/Partner.css'
import infovesta from '../../../../assets/Global/Template/Partner/logo_infovesta.png'
import danamon from '../../../../assets/Global/Template/Partner/logo_danamon.png'
import eclat from '../../../../assets/Global/Template/Partner/logo_eclat.png'
import kukche from '../../../../assets/Global/Template/Partner/logo_kukche.png'
import toefl from '../../../../assets/Global/Template/Partner/logo_toefl.png'
import ayo from '../../../../assets/Global/Template/Partner/logo_ayo.png'
import aaui from '../../../../assets/Global/Template/Partner/logo_AAUI.png'
import crown from '../../../../assets/Global/Template/Partner/logo_crown.png'
import batas from '../../../../assets/Global/Template/Partner/logo_batas.png'
import duniaqua from '../../../../assets/Global/Template/Partner/logo_duniaqua.png'
import kms from '../../../../assets/Global/Template/Partner/logo_KMS.png'
function Partner() {
  return (
    <div className="container-partner">
        <div className="wrapper-partner">
            <div className="top-partner">
                <h1>Our Company Partners</h1>
            </div>
            <div className="bottom-partner">
                <div className="wrapper-bottom-partner">
                    <div className="top-bottom-partner">
                        <img className='infovesta' src={infovesta} alt="Logo Infovesta" />
                        <img className='danamon' src={danamon} alt="Logo Danamon" />
                        <img className='eclat' src={eclat} alt="Logo Eclat" />
                        <img className='kukche' src={kukche} alt="Logo Kukche" />
                        <img className='toefl' src={toefl} alt="Logo Toefl" />
                        <img className='logo' src={ayo} alt="Logo Ayo Belajar Bahasa Spanyol" />
                    </div>
                    <div className="bottom-bottom-partner">
                        <img className='aaui' src={aaui} alt="Logo AAUI" />
                        <img className='crown' src={crown} alt="Logo Crown" />
                        <img className='batas' src={batas} alt="Logo Batas" />
                        <img className='duniaqua' src={duniaqua} alt="Logo Duniaqua" />
                        <img className='kms' src={kms} alt="Logo KMS" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partner