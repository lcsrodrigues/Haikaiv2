import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import style from './style.module.scss';

export default function BackToTop() {

    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
            if (currentPosition > 0) {
                // downscroll code
                setScrolling(false);
            } else {
                // upscroll code
                setScrolling(true);
            }
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
        <div className={style.btnTopo} style={{ 'display': (scrolling == false) ? 'block' : 'none' }}>

            <Link to="topo" spy={true} smooth={true} duration={500}>
                <img src="/arrowhead-up-white.png" alt="Voltar ao topo" />
            </Link>
        </div>
    )
}