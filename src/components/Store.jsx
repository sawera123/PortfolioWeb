import React from 'react'
import { useTranslation } from "react-i18next"

export default function Store() {
  const { t } = useTranslation();
  return (
    <>
        <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 "
        style={{"background-color": "black"}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 text-center">

                    <h1 className="tect-white mt-5" style={{"color": "white"}}> {t("Coming Soon........")} </h1>


                </div>
            </div>
        </div>
    </div>
    </>
  )
}
