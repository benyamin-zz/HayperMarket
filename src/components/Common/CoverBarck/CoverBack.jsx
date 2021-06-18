import {Grid} from '@material-ui/core'
import {Container} from '@material-ui/core'
import React from 'react'
import "./CoverBack.css"

function CoverBack() {
    return (
        <section className="cover">
            <Container maxWidth="xl" className="coverBody">
                <Grid container>
                    <Grid item md={6} align="center">
                        <h2>اپلیکیشن اُکالا</h2>
                        <p>خرید آسان و راحت با تخفیف‌های جذابِ لحظه‌ای، دانلود برای سیستم عاملهای
                            اندروید و آیفون (iOS)</p>
                        <div>
                            <a href="#" className="m8">
                                <img src="https://okala.com/assets/img/bazar.png?v=8P1Epg5vZciCuz14M-nteRoJ_syJgPiv-d1bnm7VPuw" alt=""/>
                            </a>
                            <a href="#" className="m8">
                                <img src="https://okala.com/assets/img/googleplay.png" alt=""/>
                            </a>
                            <a href="#" className="m8">
                                <img src="https://okala.com/assets/img/direct-android.png?v=Gep6lvAJyilhH8Fsf5LYwLKYV1baCj5JAG0G37s1zBY" alt=""/>
                            </a>
                            <a href="#" className="m8">
                                <img src="https://okala.com/assets/img/apple-store.png?v=czcbBcWTi9UYlzhz7JkOoybgyOU6yplWD4SUfS99Sik" alt=""/>
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default CoverBack
