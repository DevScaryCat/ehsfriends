// app/consulting/musculoskeletal-survey/page.tsx
'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SideNavigation from '@/app/components/SideNavigation';
import PageHero from '@/app/components/PageHero';

export default function MusculoskeletalSurveyPage() {
    const navItems = [
        { id: 'intro', title: '근골격계 부담작업 유해요인 조사' },
        { id: 'examples', title: '실제 서비스 예시' },
        { id: 'test', title: '테스트' },
        { id: 'process', title: '업무 프로세스' },
        { id: 'achievements', title: '주요 성과 및 수상내역' },
    ];

    return (
        <>
            <Header defaultOpaque />
            <PageHero
                title="근골격계 부담작업 유해요인 조사"
                subtitle="EHS Friends는 다양한 산업 분야의 고객들과 함께하며 신뢰와 전문성을 바탕으로 성장해왔습니다."
            />
            <main className="bg-white min-h-screen">
                <div className="container mx-auto px-6 py-16">
                    <div className="flex flex-col md:flex-row gap-12">
                        <SideNavigation navItems={navItems} />

                        <section className="md:w-3/4">
                            <div id="intro" data-section="intro" className="space-y-16 mb-16 scroll-mt-24">
                                <h1 className="text-4xl tracking-tight font-bold text-center text-gray-800 mb-10">근골격계 부담작업 유해요인 조사</h1>
                                <div className='border-b border-gray-200 pb-16'>
                                    <h2 className="text-3xl tracking-tight text-gray-800 font-semibold mb-4">근골격계</h2>
                                    <p className="text-gray-700 leading-7">
                                        이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다. 사법권은 법관으로 구성된 법원에 속한다. 국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다.
                                        국군의 조직과 편성은 법률로 정한다. 비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의 경우와 초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에 한하여 단심으로 할 수 있다. 다만, 사형을 선고한 경우에는 그러하지 아니하다.
                                        대통령의 임기연장 또는 중임변경을 위한 헌법개정은 그 헌법개정 제안 당시의 대통령에 대하여는 효력이 없다. 국무회의는 정부의 권한에 속하는 중요한 정책을 심의한다.
                                    </p>
                                </div>
                                <div className='border-b border-gray-200 pb-16'>
                                    <h2 className="text-3xl tracking-tight text-gray-800 font-semibold mb-4">조사단계</h2>
                                    <p className="text-gray-700 leading-7">
                                        행정각부의 설치·조직과 직무범위는 법률로 정한다. 대통령·국무총리·국무위원·행정각부의 장·헌법재판소 재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원 기타 법률이 정한 공무원이 그 직무집행에 있어서 헌법이나 법률을 위배한 때에는 국회는 탄핵의 소추를 의결할 수 있다.
                                        국가는 평생교육을 진흥하여야 한다. 모든 국민은 양심의 자유를 가진다. 대통령의 임기연장 또는 중임변경을 위한 헌법개정은 그 헌법개정 제안 당시의 대통령에 대하여는 효력이 없다.
                                        국회는 의원의 자격을 심사하며, 의원을 징계할 수 있다. 비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의 경우와 초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에 한하여 단심으로 할 수 있다. 다만, 사형을 선고한 경우에는 그러하지 아니하다.
                                    </p>
                                </div>
                                <div className='border-b border-gray-200 pb-16'>
                                    <h2 className="text-3xl tracking-tight text-gray-800 font-semibold mb-4">보유인력</h2>
                                    <p className="text-gray-700 leading-7">
                                        군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적 중립성은 준수된다. 대통령은 헌법과 법률이 정하는 바에 의하여 공무원을 임면한다.
                                        모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 공무원의 신분과 정치적 중립성은 법률이 정하는 바에 의하여 보장된다.
                                    </p>
                                </div>
                            </div>

                            <div id="examples" data-section="examples" className="scroll-mt-24">
                                <h2 className="text-3xl tracking-tight text-gray-800 font-semibold mb-4">실제 서비스 예시</h2>
                                <p className="text-gray-700 leading-7">
                                    모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. 법률은 특별한 규정이 없는 한 공포한 날로부터 20일을 경과함으로써 효력을 발생한다. 대통령은 국가의 독립·영토의 보전·국가의 계속성과 헌법을 수호할 책무를 진다.
                                    신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다. 제2항과 제3항의 처분에 대하여는 법원에 제소할 수 없다.
                                </p>
                                <ul className="px-6 py-6 mt-6 bg-gray-100 rounded-b-lg space-y-4">
                                    <li className='list-none flex-row flex space-x-3 items-center  text-gray-700'>
                                        <p className='border border-gray-300 font-bold size-8 flex items-center justify-center rounded-full shrink-0'>1</p>
                                        <p className=''>대통령은 국가의 독립·영토의 보전·국가의 계속성과 헌법을 수호할 책무를 진다.</p>
                                    </li>
                                    <li className='list-none flex-row flex space-x-3 items-center  text-gray-700'>
                                        <p className='border border-gray-300 font-bold size-8 flex items-center justify-center rounded-full shrink-0'>2</p>
                                        <p className=''>대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다.</p>
                                    </li>
                                    <li className='list-none flex-row flex space-x-3 items-center  text-gray-700'>
                                        <p className='border border-gray-300 font-bold size-8 flex items-center justify-center rounded-full shrink-0'>3</p>
                                        <p className=''>모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다.</p>
                                    </li>
                                    <li className='list-none flex-row flex space-x-3 items-center  text-gray-700'>
                                        <p className='border border-gray-300 font-bold size-8 flex items-center justify-center rounded-full shrink-0'>4</p>
                                        <p className=''>대통령의 임기연장 또는 중임변경을 위한 헌법개정은 그 헌법개정 제안 당시의 대통령에 대하여는 효력이 없다.</p>
                                    </li>
                                    <li className='list-none flex-row flex space-x-3 items-center  text-gray-700'>
                                        <p className='border border-gray-300 font-bold size-8 flex items-center justify-center rounded-full shrink-0'>5</p>
                                        <p className=''>군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다.</p>
                                    </li>
                                </ul>
                            </div>

                            <div id="test" data-section="test" className="my-16 scroll-mt-24">
                                <h2 className="text-3xl tracking-tight text-gray-800 font-semibold mb-4">테스트</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className=" rounded-lg p-6 border">
                                        <h3 className="font-bold mb-3 text-orange-500 text-xl">생태계 보전</h3>
                                        <p className="text-gray-700 text-sm leading-7">
                                            근로자는 근로조건의 향상을 위하여 자주적인 단결권·단체교섭권 및 단체행동권을 가진다. 제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다.
                                            선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 모든 국민은 법률이 정하는 바에 의하여 선거권을 가진다.
                                        </p>
                                    </div>
                                    <div className=" rounded-lg p-6 border">
                                        <h3 className="font-bold mb-3 text-orange-500 text-xl">생태계 보전</h3>
                                        <p className="text-gray-700 text-sm leading-7">
                                            근로자는 근로조건의 향상을 위하여 자주적인 단결권·단체교섭권 및 단체행동권을 가진다. 제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다.
                                            선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 모든 국민은 법률이 정하는 바에 의하여 선거권을 가진다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div id="process" data-section="process" className="mb-16 scroll-mt-24">
                                <h2 className="text-3xl tracking-tight text-gray-800 font-semibold mb-4">업무 프로세스</h2>
                                <p className="text-gray-700 leading-7">
                                    국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며, 국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다. 이 헌법중 공무원의 임기 또는 중임제한에 관한 규정은 이 헌법에 의하여 그 공무원이 최초로 선출 또는 임명된 때로부터 적용한다.
                                </p>
                                <div className="flex flex-col md:flex-row mt-12 w-full">
                                    <div className='border-t md:w-1/3 w-full'>
                                        <h3 className="font-semibold text-gray-700 text-lg mb-2 md:mb-0 border-t-2 pt-6">01. 안전관리 프로세스 운영현황</h3>
                                    </div>
                                    <div className='border-t md:w-2/3 w-full'>
                                        <p className="text-gray-700 text-sm pt-7 leading-7">
                                            누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다. 다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다.
                                            새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row mt-12 w-full">
                                    <div className='border-t md:w-1/3 w-full'>
                                        <h3 className="font-semibold text-gray-700 text-lg mb-2 md:mb-0 border-t-2 pt-6">02. 안전관리 프로세스 운영현황</h3>
                                    </div>
                                    <div className='border-t md:w-2/3 w-full'>
                                        <p className="text-gray-700 text-sm pt-7 leading-7">
                                            누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다. 다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다.
                                            새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row mt-12 w-full">
                                    <div className='border-t md:w-1/3 w-full'>
                                        <h3 className="font-semibold text-gray-700 text-lg mb-2 md:mb-0 border-t-2 pt-6">03. 안전관리 프로세스 운영현황</h3>
                                    </div>
                                    <div className='border-t md:w-2/3 w-full'>
                                        <p className="text-gray-700 text-sm pt-7 leading-7">
                                            누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다. 다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다.
                                            새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row mt-12 w-full last:border-b last:pb-12">
                                    <div className='border-t md:w-1/3 w-full'>
                                        <h3 className="font-semibold text-gray-700 text-lg mb-2 md:mb-0 border-t-2 pt-6">04. 안전관리 프로세스 운영현황</h3>
                                    </div>
                                    <div className='border-t md:w-2/3 w-full'>
                                        <p className="text-gray-700 text-sm pt-7 leading-7">
                                            누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다. 다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다.
                                            새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div id="achievements" data-section="achievements" className="scroll-mt-24">
                                <h2 className="text-3xl tracking-tight font-semibold text-gray-800 mb-14">주요 성과 및 수상내역</h2>
                                <div className='pb-32'>
                                    <div className="flex flex-col md:flex-row">
                                        <div className='mb-8 md:mb-0 md:mr-10'>
                                            <h6 className='text-6xl font-bold text-orange-200 -mt-2'>2025</h6>
                                        </div>
                                        <div className="w-full">
                                            <div className='flex-row items-start'>
                                                <div className='relative'>
                                                    <div className='size-3 rounded-full bg-orange-500'></div>
                                                    <div className='w-[1px] h-24 bg-gray-300 absolute left-[5.3px]'></div>
                                                </div>
                                                <p className='text-gray-800 font-semibold text-lg ml-8 -mt-5'>범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있다.</p>
                                            </div>
                                            <div className='flex-row items-start mt-16'>
                                                <div className='relative'>
                                                    <div className='size-3 rounded-full bg-orange-500'></div>
                                                    <div className='w-[1px] h-52 bg-gray-300 absolute left-[5.3px]'></div>
                                                </div>
                                                <p className='text-gray-800 font-semibold text-lg ml-8 -mt-5'>범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있다.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row mt-36">
                                        <div className='mb-8 md:mb-0 md:mr-10'>
                                            <h6 className='text-6xl font-bold text-orange-200 -mt-2'>2024</h6>
                                        </div>
                                        <div className="w-full">
                                            <div className='flex-row items-start'>
                                                <div className='relative'>
                                                    <div className='size-3 rounded-full bg-orange-500'></div>
                                                    <div className='w-[1px] h-24 bg-gray-300 absolute left-[5.3px]'></div>
                                                </div>
                                                <p className='text-gray-800 font-semibold text-lg ml-8 -mt-5'>범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있다.</p>
                                            </div>
                                            <div className='flex-row items-start mt-16'>
                                                <div className='relative'>
                                                    <div className='size-3 rounded-full bg-orange-500'></div>
                                                    <div className='w-[1px] h-52 bg-gray-300 absolute left-[5.3px]'></div>
                                                </div>
                                                <p className='text-gray-800 font-semibold text-lg ml-8 -mt-5'>범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있다.</p>
                                            </div>
                                            <div className='flex-row items-start mt-16'>
                                                <div className='relative'>
                                                    <div className='size-3 rounded-full bg-orange-500'></div>
                                                    <div className='w-[1px] h-52 bg-gray-300 absolute left-[5.3px]'></div>
                                                </div>
                                                <p className='text-gray-800 font-semibold text-lg ml-8 -mt-5'>범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있다.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row mt-36">
                                        <div className='mb-8 md:mb-0 md:mr-10'>
                                            <h6 className='text-6xl font-bold text-orange-200 -mt-2'>2023</h6>
                                        </div>
                                        <div className="w-full">
                                            <div className='flex-row items-start'>
                                                <div className='relative'>
                                                    <div className='size-3 rounded-full bg-orange-500'></div>
                                                    <div className='w-[1px] h-24 bg-gray-300 absolute left-[5.3px]'></div>
                                                </div>
                                                <p className='text-gray-800 font-semibold text-lg ml-8 -mt-5'>범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있다.</p>
                                            </div>
                                            <div className='flex-row items-start mt-16'>
                                                <div className='relative'>
                                                    <div className='size-3 rounded-full bg-orange-500'></div>
                                                    <div className='w-[1px] h-52 bg-gray-300 absolute left-[5.3px]'></div>
                                                </div>
                                                <p className='text-gray-800 font-semibold text-lg ml-8 -mt-5'>범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있다.</p>
                                                <ul className='ml-12 mt-4'>
                                                    <li className=' list-disc text-gray-500 pl-1'>국민의 자유와 권리는 헌법에 열거되지 아니한 이유로 경시되지 아니한다. </li>
                                                    <li className=' list-disc text-gray-500 pl-1 mt-2'>국가안전보장회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}