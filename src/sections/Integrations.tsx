import IntegrationsColumn from "@/components/IntegrationsColumn";
import Tag from "@/components/Tag";

const integrations = [
    { name: "Figma", icon: "/images/figma-logo.svg", description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: "/images/notion-logo.svg", description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: "/images/slack-logo.svg", description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: "/images/relume-logo.svg", description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: "/images/framer-logo.svg", description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: "/images/github-logo.svg", description: "GitHub is the leading platform for code collaboration." },
];
export type IntegrationsType = typeof integrations;
export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Integrations</Tag>
                        <h2 className="text-6xl font-medium mt-6">Plays well with <span className="text-lime-400">others</span></h2>
                        <p className="text-white/50 mt-4 text-lg">Layers seamlessly connects with your favorite tools, making it easy to plug into any workflow and collaborate across platforms.</p>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationsColumn integrations={integrations} />
                            <IntegrationsColumn integrations={integrations.slice().reverse()} className="hidden md:flex" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
