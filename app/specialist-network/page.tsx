// app/specialist-network/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Leaf, Users, Flag, Edit3, Hash, HeartHandshake } from 'lucide-react';

const committeeMembers = [
    { role: '위원장', name: '홍길동', affiliation: 'EHS Friends 이사회의장' },
    { role: '위원', name: '김철수', affiliation: 'EHS Friends 대표이사' },
    { role: '위원', name: '박영희', affiliation: 'EHS Friends 대표이사' },
    { role: '위원', name: '이민준', affiliation: '사외이사 / 미래대학 석학교수' },
    { role: '위원', name: '정다은', affiliation: '사외이사 / 녹색기술원 교수' },
    { role: '위원', name: '최현우', affiliation: '사외이사 / 서울대학교 법학전문대학원장' },
    { role: '위원', name: '조은지', affiliation: '사외이사 / ABC 회계법인 파트너' },
    { role: '위원', name: '윤지후', affiliation: '사외이사 / 가나다 투자자문 대표' },
    { role: '위원', name: '한서연', affiliation: '사외이사 / 스타트업캠퍼스 이사장' },
];

const roles = [
    { icon: Flag, title: 'ESG 정책 수립', description: 'ESG 전략 및 정책 심의, 의결' },
    { icon: Edit3, title: 'ESG 리스크 검토', description: 'ESG 리스크 및 기회요인 검토' },
    { icon: Hash, title: '주요 과제 관리', description: 'ESG 관련 주요 추진과제 관리' },
    { icon: HeartHandshake, title: '이해관계자 소통', description: 'ESG 관련 이해관계자 소통' },
];

export default function SpecialistNetworkPage() {
    return (
        <>
            <Header defaultOpaque />
            <main className="bg-white text-gray-800">

                <section className="py-24 text-center">
                    <div className="container mx-auto px-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-3xl font-bold leading-snug max-w-3xl mx-auto"
                        >

                            혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고 유지되어야 하며 국가는 이를 보장한다
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="max-w-4xl mx-auto mt-12 rounded-sm overflow-hidden h-[400px]"
                        >
                            <Image src="/10.jpg" alt="Sustainable future" width={1000} height={400} className="w-full object-cover" unoptimized />
                        </motion.div>
                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-16 text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className=""
                            >
                                <Leaf className="w-8 h-8 text-gray-700 shrink-0 mb-4" />
                                <div>
                                    <p className="text-gray-600 leading-relaxed">
                                        대통령은 국가의 독립·영토의 보전·국가의 계속성과 헌법을 수호할 책무를 진다. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다. 국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className=""
                            >
                                <Users className="w-8 h-8 text-gray-700 shrink-0 mb-3" />
                                <div>
                                    <p className="text-gray-600 leading-relaxed">
                                        제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. 이 헌법시행 당시에 이 헌법에 의하여 새로 설치될 기관의 권한에 속하는 직무를 행하고 있는 기관은 이 헌법에 의하여 새로운 기관이 설치될 때까지 존속하며 그 직무를 행한다.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-3xl font-bold mb-4"
                        >
                            통신·방송의 시설기준과 신문의 기능을 보장하기 위하여 필요한 사항은 법률로 정한다.
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-16 p-8 "
                        >
                            <div className="text-left">
                                <p className="font-bold text-lg mb-2">네트워킹</p>
                                <p>제2항과 제3항의 처분에 대하여는 법원에 제소할 수 없다. 모든 국민은 학문과 예술의 자유를 가진다.</p>
                            </div>
                            <div className="my-8 flex justify-center items-center gap-4">
                                <div className="size-56 rounded-full bg-green-400/80 flex items-center justify-center font-bold text-lg text-green-700">인력</div>
                                <div className="size-56 rounded-full bg-orange-400/80 flex items-center justify-center font-bold text-lg text-orange-700 -mx-12 z-10">신뢰</div>
                                <div className="size-56 rounded-full bg-sky-400/80 flex items-center justify-center font-bold text-lg text-slate-700">네트워크</div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 text-left">
                                <div>
                                    <p className="font-bold mb-2">성장동력</p>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                                        <li>함께하는 기업 시민 문화</li>
                                        <li>투명하고 공정한 지배구조</li>
                                        <li>책임경영 및 컴플라이언스</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-bold mb-2">핵심과제</p>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                                        <li>ESG 정보 공개 및 공시</li>
                                        <li>지속가능 금융 확대</li>
                                        <li>기업문화 혁신 및 다양성</li>
                                        <li>정보보호 및 보안 강화</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="max-w-3xl"
                        >
                            <h2 className="text-3xl font-bold mb-4">재산권의 행사는 공공복리에 적합하도록 하여야 한다</h2>
                            <p className="text-gray-600 leading-relaxed">
                                재판의 전심절차로서 행정심판을 할 수 있다. 행정심판의 절차는 법률로 정하되, 사법절차가 준용되어야 한다. 법률이 정하는 주요방위산업체에 종사하는 근로자의 단체행동권은 법률이 정하는 바에 의하여 이를 제한하거나 인정하지 아니할 수 있다.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-12"
                        >
                            <h3 className="text-xl font-bold mb-2">구성</h3>
                            <p className="text-gray-600 mb-8">투명성과 외부 전문가의 전문성을 반영하여 위원회를 구성하고 그 독립성을 제고합니다.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {committeeMembers.map((member) => (
                                    <div key={member.name} className="bg-gray-50 p-6 rounded-lg">
                                        <p className="font-bold text-gray-500 text-sm">{member.role}</p>
                                        <p className="text-xl font-semibold my-1">{member.name}</p>
                                        <p className="text-gray-600">{member.affiliation}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="mt-16"
                        >
                            <h3 className="text-xl font-bold mb-8">역할</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                                {roles.map((role) => (
                                    <div key={role.title}>
                                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-slate-100">
                                            <role.icon className="w-8 h-8 text-gray-700" />
                                        </div>
                                        <p className="font-semibold">{role.title}</p>
                                        <p className="text-gray-600 text-sm mt-1">{role.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}