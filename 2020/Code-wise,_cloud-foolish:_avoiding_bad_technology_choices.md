# [Code-wise, cloud-foolish: avoiding bad technology choices](https://forrestbrazeal.com/2020/01/05/code-wise-cloud-foolish-avoiding-bad-technology-choices/)

* You could sum up all these rules as a bias toward the familiar. It feels good to use programming languages and tools that we know and trust. There is immediate, positive feedback when you create a slick deployment script because CloudFormation is too slow, or throw your data in Postgres because it “just works”. Our pattern-matching brains tell us that this is smart engineering.

* Code-wise, cloud-foolish thinking uses custom code to accomplish non-differentiated tasks that cloud services already perform.

* Finally, code-wise, cloud-foolish thinking believes that you can hedge against lock-in by avoiding cloud best practices in favor of lowest-common-denominator “cloud-agnostic” solutions.

* K8s is so complex that we avoid even spelling out the word, like it’s the Hebrew name for God. The orchestration and configuration requirements to run it in production are far beyond many teams’ comfort level.

* But due to the lower fiscal and emotional investment, I typically feel much less pain when it’s time to move away from a managed service than if I have to sunset something I built

* Anyway. You wouldn’t incur massive credit card debt just to get a few free hotel nights. So don’t spend your limited innovation credits building bespoke, complex systems that provide no direct value to your business.