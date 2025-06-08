import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://github.com/abhishekbhonde"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
            >
              Abhishek
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/abhishekbhonde/pitchpal"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="flex gap-4 md:gap-6">
          <a
            href="https://github.com/abhishekbhonde/pitchpal"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub Repository"
          >
            <Github className="h-5 w-5 md:h-6 md:w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://twitter.com/abhiishektwts"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Twitter Profile"
          >
            <Twitter className="h-5 w-5 md:h-6 md:w-6" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
} 