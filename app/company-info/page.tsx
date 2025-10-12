
'use client';

import { Aperture, Zap, Shield, TrendingUp, ArrowRight, Users, Leaf, Container } from 'lucide-react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';


export default function SpecialistNetworkPage() {
    return (
        <>
            <Header defaultOpaque />
            <div className='bg-white'>
                <section className="py-16 text-center">
                    <div className="container ml-auto px-6 w-full">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-3xl font-bold leading-snug max-w-3xl text-left text-gray-800">
                            국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다. 정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-6 text-gray-600 leading-relaxed max-w-3xl text-left"
                        >
                            국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다. 정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 그 운영은 민주적이어야 한다. 국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다. 정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 그 운영은 민주적이어야 한다.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="max-w-4xl mt-12 rounded-sm overflow-hidden h-[400px]"
                        >
                            <Image src="/10.jpg" alt="Sustainable future" width={1000} height={400} className="w-full object-cover" unoptimized />
                        </motion.div>
                    </div>
                    <div className="container mx-auto px-6 mt-32">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-3xl font-bold leading-snug max-w-3xl ml-auto  text-right text-gray-800">
                            국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다. 정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-6 text-gray-600 leading-relaxed ml-auto max-w-3xl text-right"
                        >
                            제안된 헌법개정안은 대통령이 20일 이상의 기간 이를 공고하여야 한다. 국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다.
                            국회는 상호원조 또는 안전보장에 관한 조약, 중요한 국제조직에 관한 조약, 우호통상항해조약, 주권의 제약에 관한 조약, 강화조약, 국가나 국민에게 중대한 재정적 부담을 지우는 조약 또는 입법사항에 관한 조약의 체결·비준에 대한 동의권을 가진다.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="max-w-4xl mt-12 rounded-sm overflow-hidden bg-slate-300 h-[400px] ml-auto"
                        >
                        </motion.div>
                    </div>
                    <div className="container mx-auto px-6 mt-32">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-3xl font-bold leading-snug max-w-3xl mx-auto  text-gray-800">
                            국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다. 정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-6 text-gray-600 leading-relaxed mx-auto max-w-3xl"
                        >
                            제안된 헌법개정안은 대통령이 20일 이상의 기간 이를 공고하여야 한다. 국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다.
                            국회는 상호원조 또는 안전보장에 관한 조약, 중요한 국제조직에 관한 조약, 우호통상항해조약, 주권의 제약에 관한 조약, 강화조약, 국가나 국민에게 중대한 재정적 부담을 지우는 조약 또는 입법사항에 관한 조약의 체결·비준에 대한 동의권을 가진다.
                        </motion.p>
                        <div className='gird columns-2 mx-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-12'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="max-w-4xl rounded-3xl overflow-hidden border-gray-200 border h-[300px] ml-auto items-center flex">
                                <div className='flex-row flex'>
                                    <Container size={100} color='#364153' />
                                    <div>
                                        <h6 className='text-2xl font-bold'>테스트 11</h6>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="max-w-4xl rounded-3xl overflow-hidden border-gray-200 border h-[300px] ml-auto items-center flex">
                                <div className='flex-row flex'>
                                    <Container size={100} color='#364153' />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}