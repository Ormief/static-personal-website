import ChatBot from "react-chatbotify";

const Chatbot = () => {
  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const settings = {
    general: {
      primaryColor: "#111111",
      secondaryColor: "#333333",
      flowStartTrigger: "ON_CHATBOT_INTERACT",
    },
    chatButton: {
      icon: "/chatbot-icon.svg",
    },
    header: {
      title: (
        <div
          style={{
            cursor: "pointer",
            margin: 0,
            fontSize: 18,
            fontWeight: "600",
          }}
          onClick={() => window.open("/")}
        >
          Chatbot
        </div>
      ),
      showAvatar: false,
    },
    tooltip: {
      mode: "CLOSE",
      text: "Hi there",
    },
    chatHistory: {
      disabled: true,
    },
  };


    const helpOptions = ["About", "Skills", "Contact", "Projects"];

    const flow = {
    start: {
        message: `${getTimeGreeting()}, thanks for visiting.`,
        transition: { duration: 1900 },
        chatDisabled: true,
        path: "ask_for_help",
    },

    ask_for_help: {
        message: "Would you like some help from me today?",
        options: ["Yes", "No"],
        path: "process_options",
        chatDisabled: true,
    },

    no_help: {
        disabled: true,   
        message: "That's okay! If you need anything later, feel free to ask. Enjoy the rest of your visit.",
        chatDisabled: true,
    },

    show_options: {
        chatDisabled: true,
        disabled: true,          // ← keep this exactly like Langwarrin
        options: helpOptions,    // ← About / Skills / Contact
        path: "process_options",
    },

    prompt_again: {
        message: "Do you need any other help?",
        options: ["Yes", "No"],
        path: "process_options",
        chatDisabled: true,
    },

    process_options: {
        transition: { duration: 0 },
        chatDisabled: true,
        path: async (params) => {
        const input = params.userInput;

        switch (input) {
            case "Yes":
            return "show_options";

            case "No":
            return "no_help";

            case "About":
            await params.injectMessage(
                "This is Nikolaos Fouras' personal website."
            );
            return "prompt_again";

            case "Skills":
            await params.injectMessage(
                "Nick has skills and experience across both finance and technology - including experience in startups both large and small."
            );
            return "prompt_again";

            case "Projects":
            await params.injectMessage(
                "Click on each project to see more."
            );
            return "prompt_again";

            case "Contact":
            await params.injectMessage(
                "You can reach Nick via the contact section on this site."
            );
            return "prompt_again";

            default:
            await params.injectMessage(
                "I'm sorry, I didn't understand that. Can you please choose from the options?"
            );
            return "ask_for_help";
        }
        },
    },

    repeat: {
        transition: { duration: 3000 },
        path: "prompt_again",
    },
    };





  return <ChatBot flow={flow} settings={settings} />;
};

export default Chatbot;