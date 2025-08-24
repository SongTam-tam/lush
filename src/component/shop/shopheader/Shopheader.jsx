import { useRef } from 'react';
import { Shopheaderstyled } from './style';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
const Shopheader = ({ selected, onSelect }) => {
    const menuData = ['bath', 'shower', 'face', 'body', 'hair', 'fragrance'];
    const headerRef = useRef();
    useGSAP(
        () => {
            gsap.set(headerRef.current, { display: 'none' });
            ScrollTrigger.create({
                trigger: '.subheader',
                start: 'top -=2500',
                markers: true,
                onEnter: () => {
                    headerRef.current.style.display = 'flex';
                    headerRef.current.style.position = 'fixed';
                },
                onLeaveBack: () => {
                    headerRef.current.style.display = 'none';
                    headerRef.current.style.position = 'static';
                },
            });
        },
        {
            scope: headerRef,
        }
    );
    return (
        <Shopheaderstyled className="subheader" ref={headerRef}>
            <ul>
                {menuData.map((key) => (
                    <li
                        key={key}
                        onClick={() => onSelect(key)}
                        className={selected === key ? 'on' : ''}
                    >
                        {key.toUpperCase()}
                    </li>
                ))}
            </ul>
        </Shopheaderstyled>
    );
};

export default Shopheader;
