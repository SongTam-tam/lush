import { BestSellerStyle } from './style';
import BestList1 from './bestList/BestList1';
import BestList2 from './bestList/BestList2';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoIosPause } from 'react-icons/io';
import { HiMiniPlay } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);
const BestSellers = () => {
    const nav = useNavigate();
    const { best } = useSelector((state) => state.best);
    const list1 = best.slice(0, 7);
    const list2 = best.slice(8, 16);
    const List1Ref = useRef();
    const List2Ref = useRef();
    const contentRef = useRef();
    const tween1Ref = useRef(null);
    const tween2Ref = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    useGSAP(
        () => {
            const clone1 = List1Ref.current.cloneNode(true);
            const clone2 = List2Ref.current.cloneNode(true);
            List1Ref.current.append(clone1);
            List2Ref.current.append(clone2);

            ScrollTrigger.create({
                trigger: '.content1',
                start: 'top-=2000 top',
                marker: true,
                onEnter: () => {
                    // contentRef.classList.add('');
                    tween1Ref.current = gsap.to(List1Ref.current, {
                        x: '-50%',
                        ease: 'linear',
                        duration: 70,
                        repeat: -1,
                    });
                    tween2Ref.current = gsap.fromTo(
                        List2Ref.current,
                        {
                            x: '-50%',
                        },
                        {
                            x: '0%',
                            ease: 'linear',
                            duration: 70,
                            repeat: -1,
                        }
                    );
                },
            });
        },
        { scope: contentRef }
    );
    const handleToggle = () => {
        if (isPlaying) {
            tween1Ref.current?.pause();
            tween2Ref.current?.pause();
        } else {
            tween1Ref.current?.resume();
            tween2Ref.current?.resume();
        }
        setIsPlaying(!isPlaying);
    };
    //   const Listfirst;
    return (
        <BestSellerStyle>
            <div className="inner">
                <h2>BEST SELLERS</h2>
                <p className="pabtn">
                    <i onClick={handleToggle}>{isPlaying ? <IoIosPause /> : <HiMiniPlay />}</i>
                    <button onClick={() => nav('/shop')}>view all</button>
                </p>
            </div>
            <div className="content1" ref={contentRef}>
                <div className="scroll-clip">
                    <div className="right">
                        <BestList1 list1={list1} List1Ref={List1Ref} />
                    </div>
                    <div className="left">
                        <BestList2 list2={list2} List2Ref={List2Ref} />
                    </div>
                </div>
            </div>
        </BestSellerStyle>
    );
};

export default BestSellers;
