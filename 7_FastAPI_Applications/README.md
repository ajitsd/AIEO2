[FastAPI](https://fastapi.tiangolo.com/) is, as the name would suggest, [fast](https://fastapi.tiangolo.com/benchmarks/) and focused on building APIs. 

It is the **most popular Python web framework** for building APIs, in fact!

> FastAPI is a modern, fast (high-performance), **web framework for building APIs** with **Python** *based on standard Python type hints*.“ [[Ref](https://fastapi.tiangolo.com/)]
> 

Let’s define [web framework](https://wiki.python.org/moin/WebFrameworks):

> A Web framework is a collection of packages or modules which allow developers to write Web applications or services without having to handle such low-level details as protocols, sockets or process/thread management
> 

TL;DR on FastAPI

1. We will use FastAPI to deploy our web applications to APIs. 
2. We can then deploy the APIs how we wish, either locally (on our computer), or 
3. Remotely (e.g., on Vercel  [like so](https://vercel.com/docs/frameworks/backend/fastapi#exporting-the-fastapi-application)). 
4. The way we do this is consistent - through use of the `app` file [like this](https://vercel.com/docs/frameworks/backend/fastapi#exporting-the-fastapi-application).

Remember, FastAPI just provides the **base** “application server.” 

If we want to deploy it remotely, we need to deploy it remotely.

If we want a front end on it, we need to vibe one up (or find one).

# ⚡ Fast API

## Why?

FastAPI has been used for years to deploy ML models in production.

It has been especially popular within the AI & Machine Learning communities around Python, and has been growing in popularity in recent years to overtake other open-source options like [Django](https://www.djangoproject.com/) and [Flask](https://flask.palletsprojects.com/en/stable/).

Now we’re seeing it lead the way on the deployment of agentic systems in production.

We need FastAPI because the LLM and agent applications that we want to build are generally connected to the web (e.g., www.).

## Type Hints

> *based on standard Python type hints.*
> 

A Python type hint is a way to annotate variables and function arguments, and return values with expected data types.

*Consider an example*

```markdown
def add_numbers(x: int, y: int) -> int:
    return x + y
```

`x: int` and `y: int` indicate that `x` and `y` should be integers.

`-> int` indicates that the function returns an integer.

**FastAPI** is all based on these type hints, they give it many advantages and benefits.

In an age of coding agents where even the comments are now part of the code, type hints are more important than ever. Check out the examples on code completion and auto-debugging [here](https://fastapi.tiangolo.com/python-types/#motivation) for a little more information.

## Pydantic models

> **FastAPI** is all based on Pydantic.
> 

Pydantic allows us to be pedantic about Python code. Key word: validation.

[Pydantic](https://docs.pydantic.dev/latest/) is the most widely used **data validation library** for Python.

It is also, unsurprisingly, powered by type hints. You see, tracking data types leads naturally to validation.

Let’s say we have an **object** and we want to pass it somewhere.

To pass the [**object**](https://en.wikipedia.org/wiki/Object_(computer_science)), we need to use the right [**schema**](https://en.wiktionary.org/wiki/schema).

APIs (**web apps**) use **schemas** to **validate** and enforce correct data formats (**types**)*.*

To take an example widely used in agentic system building, we need JSON objects that describe the **schema** of our **function/tool** to be called.

** Note that [JSON](https://en.wikipedia.org/wiki/JSON) stands for JavaScript **Object** Notation*

But we’re not done with standards! Remember, we’re talking about Open Source Software (OSS) APIs

## OpenAPI Standard

“An OpenAPI document that conforms to the OpenAPI Specification is itself a JSON object, which may be represented either in [*JSON*](https://spec.openapis.org/oas/latest.html#bib-rfc8259) or [*YAML*](https://spec.openapis.org/oas/latest.html#bib-yaml) format”

> The [OpenAPI Specification (OAS)](https://spec.openapis.org/oas/latest.html) defines a standard, programming language-agnostic interface description for HTTP APIs, which allows both humans and computers to discover and understand the capabilities of a service without requiring access to source code, additional documentation, or inspection of network traffic.
> 

## So What?

FastAPI leverages Python type hints, automatic data validation and conversion, and a standardized API format to make your life super easy.

In short, it does a lot of the work for you that a web framework is supposed to do.

# Appendix - Additional Fun or Important Ideas

- [Concurrent Burgers](https://fastapi.tiangolo.com/async/#concurrent-burgers) vs. [Parallel Burgers](https://fastapi.tiangolo.com/async/#concurrent-burgers) (on the importance of asynchronous coding)
- [Environment Variables](https://fastapi.tiangolo.com/environment-variables/) (where we should put our LLM API keys)
- [Virtual Environments](https://fastapi.tiangolo.com/virtual-environments/) (where we want our AI applications to live)

### **Thinking Questions**

- What is one lesson you've learned from this?
- What is one [lesson that you have not yet learned](https://www.loom.com/share/b34e4bd657f74892ac9a01f774113b4d)?
