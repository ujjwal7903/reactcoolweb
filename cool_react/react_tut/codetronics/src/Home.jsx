import React from "react";
import Middle_logo from "./Middle_logo";
import HomePageMentor from "./HomePageMentor";

const Home = () => {
    return (
        <>
            <div className="banner_home"></div>
            <HomePageMentor />
            <Middle_logo />
            <h2 className="middle_logo_text">About us</h2>
            <div class="about">
                <div class="content">
                    <p>Codetronics, Coding club of IIT (ISM) Dhanbad. we are very much active in maintaining the coding culture of the
                    college. And for that, we run the classes on the regular basis, and organize the workshops, interview talks
                    so that you got familiar with all that, here you get all the resources for coding and development.Again we will
                    welcome your ideas in the area of competitive programming, web development, Machine Learning etc.
      </p>
                </div>
            </div>
            <h2 class="middle_logo_text">Programming ?</h2>
            <div class="about">
                <div class="content">
                    <p>The accelerating technological developments characterize the 21st century. Wherever we look at, whatever we use
                    has something to do with technology. From the alarm clock on our phones that wake us up in the morning, the
                    coffee machine that makes us coffee at the push of a button, to the smartphones and internet that make our life
                    easier, all those are using some technology.Behind most everything we see on the internet every word, picture,
                    chart, layout, etc. there is someone who programmed it to look as such to us.
      </p>
                    <p>Computer programming, like no other job, gives you the opportunity to digitize your ideas. This idea can
                    include an app you wanted to create and thought that would go viral once you put in the market. However,
                    creating an app, it’s not an easy task as it requires effort, time, and money. While in other scenarios, you
                    would pay a developer to put to life your plans and ideas, being a programmer yourself, you would spare your
                    money and get to develop the app exactly how you want it. Especially since, let’s be honest, no one can
                    implement your idea exactly how you want it to be.
      </p>
                    <p>Not all industries will give you the opportunity to use both your technical and creative skills as programming
                    will. This is possible due to the nature of the job. It focuses on identifying issues and resolving them.
                    However, there won’t always be the same problems to solve, that’s why you’ll get to solve them while also
                    finding new solutions each time. This makes programming a very challenging and exciting career.
      </p>
                    <p>In the world of programming, it is often said that coding is all about solving problems, and computer programs
                    should solve problems for us. Learning programming is more or less coding and determining how to tackle the
                    issues that arise during coding and finding solutions for them. The more you get to solve these problems, the
                    more practical it becomes. You might even start applying this problem-solving mindset in different aspects of
                    your professional life and not only while coding.
      </p>
                    <p>
                        Becoming self-employed is the path that many programmers eventually chose. Knowing how to code allows you to
                        look into opening a business of your own. This could be an online shop, having your own website designing
                        company, building mobile applications, offering online coding courses and tutoring, and many more. The
                        opportunities are endless. What makes it even better is that the demand for these kinds of businesses is also
                        high.
      </p>
                </div>
            </div>
        </>
    );
}

export default Home;