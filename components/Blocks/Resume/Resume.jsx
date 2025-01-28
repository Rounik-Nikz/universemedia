'use client';

import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './Resume.module.scss';

import Image from "next/image";
import Container from "@/components/UI/Layout/Layout";
import FancyButton from "@/components/UI/Elements/Button/Button";
import commonConfig from "@/database/config/metadata.json";
import Link from "next/link";

export default function Resume() {
    const container = useRef();
    const cardGroup = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // CV Card
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardGroup.current,
                start: 'top 75%',
                end: 'top top',
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
        tl.to(`.${styles.cardV1}`, {
            rotate: '-6deg',
            scale: 1.05,
        }, 0);
        tl.to(`.${styles.cardV2}`, {
            rotate: '6deg',
            scale: 1.05,
            x: '5%'
        }, 0);

    }, { scope: container })


    return (
        <section className={styles.section} ref={container} id={'resume'}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.cardGroup} ref={cardGroup}>
                        <div className={`${styles.card} ${styles.cardV1}`}>
                            <div className={styles.cardInner}>
                                <div className={styles.cardTitle}>Universe Media</div>
                                <div className={styles.cardDesc}>Words from the owner</div>
                                <hr />
                                <p>
                                    At Universe Media, we believe that marketing is more than just promotion, it&apos;s a powerful tool to connect with your audience on a deeper level. Our team is passionate about crafting innovative and effective campaigns that not only drive results but also leave a lasting impression.
                                </p>
                                <div>
                                    <Link href={`mailto:${commonConfig.personal.email}`} target={'_blank'}>
                                        {commonConfig.personal.email}
                                    </Link>
                                    <span>{commonConfig.personal.city}, {commonConfig.personal.state}</span>
                                </div>
                                <hr />
                                <div className={styles.cardSectionTitle}>Portfolio</div>
                                <p>
                                    Wonder Miracle Tourism | New Dilli Zaika <br />
                                    Acs Engineering | AVA Aircon <br />
                                    Many More...
                                </p>

                            </div>

                            <figure className={styles.figure}>
                                <Image src="/logo.png" alt="Logo" width={150} height={150} />
                            </figure>
                        </div>
                        {/* <div className={`${styles.card} ${styles.cardV2}`}>
                            <div className={styles.cardInner}>
                                <Image src="/code-snippet.svg" alt="Code Snippet" width={330} height={480}/>
                            </div>
                        </div> */}
                    </div>

                    <div className={styles.cta}>
                        <FancyButton theme='button-1' target={'_blank'} link={commonConfig.personal.resumeURL}>Contact Us</FancyButton>
                    </div>
                    {/* <div className={styles.links}>
                        <Link href={`${commonConfig.social.linkedin}`} target={'_blank'}>LinkedIn</Link>
                        <Link href={`${commonConfig.social.github}`} target={'_blank'}>GitHub</Link>
                        <Link href={`${commonConfig.social.codepen}`} target={'_blank'}>CodePen</Link>
                    </div> */}
                </div>
            </Container>
        </section>
    )
}