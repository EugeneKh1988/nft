import type { NextPage } from "next";
import Layout from "@/components/Layout";
import Image from "next/image";

//
import bitImg from "@/public/case_study_1.jpg";
import case2Img from "@/public/case_study_3.jpg";
import case3Img from "@/public/case_study_4.jpg";
import approachImg from "@/public/single_case_study_approach.jpg";
import patternImg1 from "@/public/pattern_circle_1.png";
import patternImg2 from "@/public/pattern_circle_2.png";
import Comments from "@/components/Comments/Comments";


const Study: NextPage = () => {
  const blocks:{title: string; subtitle: string}[] = [
    {
      title: "Industry",
      subtitle: "Cryptocurency, Digital",
    },
    {
      title: "Services Provided",
      subtitle: "Content Marketing, PPC",
    },
    {
      title: "Area Served",
      subtitle: "Worldwide",
    },
  ];

  const statBlocks: { value: string; description: string }[] = [
    { value: "30%", description: "Lower Cost Per Acquisition" },
    { value: "86%", description: "More Inbound Leads" },
    { value: "150%", description: "More Organic Traffic" },
    { value: "12%", description: "Decrease In Bounce Rate" },
  ];

  return (
    <Layout title="Study" description="Study page for nft project">
      <div className="text-center pt-[120px] max-w-2xl mx-auto mb-10">
        <a href="" className="text-[#8358ff] text-[14px] uppercase">
          CONTENT MARKETING PPC
        </a>
        <h1 className="text-[#131740] font-bold text-4xl pt-3">
          Which Cryptocurrency Has Highest Potential In Future Growth?
        </h1>
      </div>
      <figure className="px-4 md:px-[120px]">
        <Image
          src={bitImg}
          alt="Which Cryptocurrency Has Highest Potential In Future Growth?"
          className="rounded-[20px] object-cover w-full max-h-72"
        />
      </figure>
      {/* challenge block */}
      <article className="lg:flex px-4 md:px-[120px] mt-10 lg:space-x-8">
        <div className="text-[#131740] lg:w-1/3">
          {blocks.map((block, index) => (
            <div className="mb-4" key={index}>
              <h4 className="text-[18px] font-bold mb-1">{block.title}</h4>
              <p className="text-[12px]">{block.subtitle}</p>
            </div>
          ))}
        </div>
        <div className="lg:w-2/3">
          <h1 className="text-[#131740] text-3xl font-bold mb-6 capitalize">
            The Challenge
          </h1>
          <p className="text-lg mb-4">
            As You May Already Know, There Are An Infinite Number Of Things You
            Can Test On Your Site To Help You Increase Sales.
          </p>
          <p className="text-[16px] mb-4">
            From Layout To Copy To Design, There Are Limitless Combinations Of
            Changes That May Improve Your Visitor-To-Sale Conversion Rate. But
            What&apos;s &quot;Enough&quot; When You&apos;re Just Starting Out?
            What Elements Should You Focus On Testing Before Rolling Out Your
            Traffic Campaign? Changes That May Improve Your Visitor-To-Sale
            Conversion Rate. But What&apos;s &quot;Enough&quot; When You&apos;re
            Just Starting Out? What Elements Should You Focus On Testing Before
            Rolling Out Your Traffic Campaign?
          </p>
          <p className="text-[16px] mb-6">
            Enthusiasm, Commitment And A Long List Of Satisfied Clients
            Wasn&apos;t Enough For Reborn To Achieve The Growth They Wanted. To
            Get Ahead Of The Competition, They Partnered With OMG On A Digital
            Solution Engineered For Market Success.
          </p>
          <h1 className="text-[#131740] text-3xl font-bold mb-4 capitalize">
            Key Problems
          </h1>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Wanting To Boost Domain Authority To Dominate Fierce Market
              Competition
            </li>
            <li>Create A Site Structure That Will Enhance SEO</li>
            <li>
              Onsite Optimisation To Make Their Website Appeal To Both Search
              Engines And Users
            </li>
          </ul>
        </div>
      </article>
      {/* approach block */}
      <article className="lg:flex px-4 md:px-[120px] mt-10 lg:space-x-8 bg-[#fcfafd] py-14">
        <div className="lg:w-1/2 relative">
          <Image
            src={patternImg1}
            alt="Approach"
            className="absolute -bottom-6 left-0 animate-pulse"
          />
          <Image
            src={patternImg2}
            alt="Approach"
            className="absolute -top-10 -right-3 animate-pulse"
          />
          <div className="relative flex items-center justify-center">
            <Image
              src={approachImg}
              alt="Approach"
              className="rounded-[20px]"
            />
          </div>
        </div>
        <div className="lg:w-1/2 pt-8 lg:pl-8">
          <h1 className="text-[#131740] text-3xl font-bold mb-6 capitalize">
            Our Approach
          </h1>
          <p className="text-[16px] mb-4">
            SEO Was About Achieving Significant Uplifts In Rankings, Traffic,
            And Revenue. They Were Ambitious In Becoming The Market Leader
            Online For Advertising Agencies. To Achieve Their Version Of Success
            We Customised A 24 Month Campaign. The Core Strategy Leveraged:
          </p>
          <ul className="text-[16px] mt-8 list-disc list-inside space-y-2">
            <li>
              Optimising The Website And Content Structure To Improve The SEO
              Ranking Of Their Website
            </li>
            <li>
              Cutting Edge Technical Onsite Optimisation To Streamline Search
              And Website Performance
            </li>
            <li>
              Get More High Authority And Traffic Driving Links By Increasing
              Domain Authority
            </li>
          </ul>
        </div>
      </article>
      {/* results block */}
      <article className="lg:flex px-4 sm:px-[20px] md:px-[60px] xl:px-[120px] mt-10 lg:space-x-8 py-14">
        <div className="lg:w-1/2">
          <h1 className="text-[#131740] text-3xl font-bold mb-6 capitalize">
            Results
          </h1>
          <p className="text-[16px] mb-4">
            As You May Already Know, There Are An Infinite Number Of Things You
            Can Test On Your Site To Help You Increase Sales. SEO Was About
            Achieving Significant Uplifts In Rankings, Traffic, And Revenue.
            They Were Ambitious In Becoming The Market Leader Online For
            Advertising Agencies.
          </p>
          <p className="text-[16px] mb-4">
            As You May Already Know, There Are An Infinite Number Of Things You
            Can Test On Your Site To Help You Increase Sales. From Layout To
            Copy To Design, There Are Limitless Combinations Of Changes That May
            Improve Your Visitor-To-Sale Conversion Rate. But What&apos;s
            &quot;Enough&quot; When You&apos;re Just Starting Out? What Elements
            Should You Focus On Testing Before Rolling Out Your Traffic
            Campaign?
          </p>
        </div>
        <div className="lg:w-1/2 pt-8 lg:pl-8 grid md:grid-cols-2 gap-4">
          {statBlocks.map((stat, index) => (
            <div key={index} className="border px-10 py-8 rounded-[20px]">
              <p className="text-[#10b981] text-5xl font-bold mb-2">
                {stat.value}
              </p>
              <p className="text-lg">{stat.description}</p>
            </div>
          ))}
        </div>
      </article>
      {/* comments block */}
      <Comments last={3} />
      {/* case block */}
      <h1 className="text-[#131740] font-bold text-3xl text-center mt-8">
        Related Case Studies
      </h1>
      <div className="my-12 lg:flex px-4 lg:px-[120px] lg:space-x-4">
        <div className="lg:w-1/2">
          <Image src={case2Img} alt="Case 2" className="rounded-[20px] mb-8" />
          <a className="text-[#8358ff] cursor-pointer text-sm font-medium">
            View Case Study
          </a>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <Image src={case3Img} alt="Case 3" className="rounded-[20px] mb-8" />
          <a className="text-[#8358ff] cursor-pointer text-sm font-medium">
            View Case Study
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Study;
