import styles from './Logo.module.scss';
import Link from 'next/link';
import commonConfig from '@/database/config/metadata.json';
import Image from "next/image";
export default function Logo({classVariable}) {
    return (
        <Link href="/" className={classVariable} aria-label={commonConfig.metadata.title}>
            <Image

            src="/logoWoBg.png"
            alt={commonConfig.metadata.title}
            width={125}
            height={225}
            priority
            className={styles.logo}


            />
        </Link>
    )
}