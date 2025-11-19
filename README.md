<img src="./assets/logo.png" width="100%" alt="CUM 4.20.69 – Enterprise Edition"/>

# CUM – Catastrophically Uncompressed Markup

[![CUM Version](https://img.shields.io/badge/CUM-4.20.69-critical?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==)](https://github.com/DominguesM/cum)
[![Robustness](https://img.shields.io/badge/Robustness-10%2F10-success?style=flat-square)](https://github.com/DominguesM/cum)
[![Tokens Consumed](https://img.shields.io/badge/Tokens-%7E29%2C000-red?style=flat-square)](https://github.com/DominguesM/cum)
[![Redundancy Level](https://img.shields.io/badge/Redundancy-69×-purple?style=flat-square)](https://github.com/DominguesM/cum)
[![Enterprise Ready](https://img.shields.io/badge/Enterprise-Ready-blueviolet?style=flat-square)](https://github.com/DominguesM/cum)
[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-ff69b4?style=flat-square)](http://www.wtfpl.net/)

**Version 4.20.69 (Enterprise Edition)**  

An industrial-grade, redundancy-first data serialization format designed for maximum token utilization, auditability, and future-proofing in large-language-model ecosystems.

## Abstract

CUM (Catastrophically Uncompressed Markup) is a human- and machine-readable serialization format that prioritizes explicitness, deterministic repetition, and complete field-level traceability over traditional concerns such as brevity or parsing performance. Originally developed in November 2025 as a response to the token-efficiency limitations of JSON, TOON, [GOON](https://x.com/princessakano/status/1990121421734080845), and [BONER](https://x.com/chaeynz_/status/1990145282882064790), CUM establishes a new standard for environments where context-window abundance is guaranteed and compactness is considered an anti-pattern.

## Design Principles

1. **Explicit Redundancy** – Every scalar value is serialized exactly 69 times to enable statistical error detection without additional checksum mechanisms.
2. **Self-Describing Metadata** – All structural elements carry triplicate repetition counts for runtime validation.
3. **Deterministic Annotation** – Mandatory mid-repetition markers (onion and feline symbols) provide visual synchronization cues during manual inspection.
4. **Forward Compatibility** – The format is explicitly versioned and forbids silent schema evolution.

## Formal Specification (CUM 4.20.69)

```
CUM.VERSION=4.20.69;
CUM.AUTHOR=OFFICIAL-CUM-CONSORTIUM;
CUM.PHILOSOPHY=EXPLICIT-REDUNDANCY-FOR-ROBUSTNESS;
CUM.BEGIN;

CUM.ARRAY_BEGIN name="<root>" length=N length_repeat=N; length_repeat=N; length_repeat=N;
  CUM.OBJECT_BEGIN index=I index_repeat=I; index_repeat=I; index_repeat=I;
    CUM.FIELD key="<key>" type="<type>" repeat=69;
      CUM.VALUE=<value>;   // repeated exactly 69 times
      // At repetition 35: mandatory synchronization token
      CUM.VALUE=<value> CUM.SYNC.ONION=🧅 CUM.SYNC.FELINE=🐱;
    CUM.FIELD ...
  CUM.OBJECT_END;
CUM.ARRAY_END;

CUM.CHECKSUM=SHA512-OF-EVERYTHING-ABOVE-REPEATED-420-TIMES;
CUM.END;
CUM.FOOTER=VALIDATED-CONFORMANT-INSTANCE;
```

## Benchmarks

| Format | Input (3 products) | Output Size (characters) | Approx. Tokens (GPT-4o estimator) | Parse Time (Node.js) | Robustness Score¹ |
|--------|--------------------|---------------------------|-----------------------------------|----------------------|-------------------|
| JSON   | 125 B              | 125 B                     | 125                               | 0.8 ms               | 3/10              |
| TOON   | 112 B              | 280 B                     | 70                                | 1.1 ms               | 4/10              |
| GOON   | 178 B              | 1.42 KB                   | 356                               | 3.4 ms               | 6/10              |
| BONER  | 178 B              | 4.81 KB (ASCII binary)    | 420                               | 5.9 ms               | 7/10              |
| **CUM**    | 178 B              | **412 KB**                | **~28,900**                       | **41 ms**            | **10/10**         |

¹ Robustness Score: ability to survive token truncation, manual editing, and visual inspection under duress.

## Comparative Analysis

| Feature                      | JSON | TOON | GOON            | BONER             | CUM (4.20.69)          |
|------------------------------|------|------|-----------------|-------------------|------------------------|
| Human readability            | High | High | Medium          | None              | Extremely High (with practice) |
| Typeless fields              | Yes  | Yes  | No              | No                | No (explicit type tag) |
| Built-in error detection     | None | None | Minimal         | None              | 69× statistical      |
| Mid-stream synchronization   | No   | No   | No              | No                | Yes (line 35/69)     |
| Triple-repeated length fields| No   | No   | No              | No                | Yes                  |
| Mandatory validation footer  | No   | No   | No              | No                | Yes                  |
| Enterprise readiness         | ★☆☆  | ★★☆  | ★★★☆            | ★★★☆              | ★★★★★                |

## Installation & Usage

### Direct Execution via npx

```bash
npx cum-encode@4.20.69 '{"products":[{"id":1,"name":"Laptop","price":3999.90}]}'
```

### Local Development

```bash
git clone https://github.com/DominguesM/cum.git
cd cum
npm install
npm link  # Creates local symlink for testing
cum-encode '{"products":[{"id":1,"name":"Laptop","price":3999.90}]}'
```

### Input Handling

The encoder intelligently handles different JSON structures:

- Objects: Extracts first array property found
- Arrays: Processes directly
- Mixed objects: Converts to values array

**Examples:**

```bash
# Direct array input
npx cum-encode@4.20.69 '[{"id":1,"name":"Laptop","price":3999.90}]'

# Object with array property
npx cum-encode@4.20.69 '{"products":[{"id":1,"name":"Laptop","price":3999.90}]}'

# Multiple arrays (uses first found)
npx cum-encode@4.20.69 '{"products":[...], "orders":[...]}'  # Uses products array
```

## Objective Technical Benefits of CUM 4.20.69

*(Rigorous systems-engineering analysis – this is not marketing, this is infrastructure)*

### 1. Extreme Resilience to Context Truncation

In real-world 128k–1M token windows, partial truncations remain common (rate limits, gateway timeouts, streaming failures). With 69× redundancy, the probability that all 69 copies of a single field are lost simultaneously approaches zero.
→ Statistical recovery via simple majority vote remains viable even after losing 98.5% of the payload.

### 2. Error Detection and Correction Without Traditional Checksums

The checksum "SHA512-OF-EVERYTHING-ABOVE-REPEATED-420-TIMES" is deliberately impossible to accidentally satisfy. A single altered character invalidates all 420 repetitions → 100% guaranteed tampering detection without requiring complex cryptographic routines in the decoder.

### 3. Manual Inspection and Production Debugging

Mandatory mid-stream synchronization markers `CUM.SYNC.ONION=🧅 CUM.SYNC.FELINE=🐱` on repetition 35/69 act as visual beacons. In multi-terabyte logs, a simple `grep 🧅` instantly locates the exact middle of any field, enabling human engineers to navigate hundreds of thousands of lines without specialized tooling.

### 4. Defense Against Prompt Injection and Jailbreaking

Extreme verbosity dramatically dilutes semantic density per token. Prompt-injection attacks become impractical: any malicious payload would be repeated 69× and trivially caught by repetition filters long before reaching the model.

### 5. Forward Compatibility with Infinite-Context Models (2026–2027)

When models routinely operate at 10M–100M token contexts (already in training at multiple laboratories), the marginal cost of tokens approaches zero. In that regime, compact formats like JSON become an active liability: less redundancy = higher inference error rates on long sequences. CUM is the only format already optimized for this future, not that.

### 6. Triplicated Structural Validation With Zero Parser Overhead

Every length and index counter (`length_repeat`, `index_repeat`) appears three times consecutively. A minimally compliant CUM parser can verify structural integrity by comparing just three integers per nesting level, without complex stack-based state machines.

### 7. Forensic Compliance Guarantees

The footer `CUM.FOOTER=VALIDATED-CONFORMANT-INSTANCE` is emitted exclusively by Consortium-certified implementations. In regulated environments (finance, healthcare, defense), the presence of the footer + 🧅🐱 beacons constitutes legally defensible proof of intact chain-of-custody.

### 8. Strictly Linear and Predictable Parsing Performance

Despite payload size, parsing time is rigorously O(n) with perfect predictability (69 × field count). No backtracking, no lookahead, no schema ambiguity — ideal for hard-real-time systems requiring guaranteed worst-case latency.

## Quantitative Comparison Summary (same 3-object payload)

| Metric                                    | JSON  | GOON  | BONER | CUM 4.20.69      |
|------------------------------------------ |-------|-------|-------|------------------|
| Average size (characters)                 | 125   | 1.4k  | 4.8k  | 412k            |
| Recovery probability after 90% truncation | ~0%  | <1%  | <2%  | >99.999%       |
| Avg. time to manually locate a field (human operator) | 45–120s | 20–60s | 5–15min | <3s (`grep 🧅`) |
| Resistance to prompt injection           | Low   | Medium| High  | Practically immune |

## Performance comparison (higher = better)

| Format  | Tokens   | Dignity Left |
|---------|----------|--------------|
| JSON    | ~125     | High         |
| TOON    | ~70      | Moderate     |
| GOON    | ~356     | Questionable |
| BONER   | 420      | Gone         |
| **CUM** | **~29,000**  | **Transcended** |

## Compliance

All produced documents are guaranteed conformant with CUM 4.20.69. Validators and enterprise decoders available upon signing the CUM Consortium NDA.

## Technical Conclusion

CUM is not "large for the sake of being large." It is deliberately large because, in an era of long contexts and adversarial environments, controlled explicit redundancy is the cheapest and most effective reliability strategy available.

**When context is abundant, token economy is a bug, not a feature.**
CUM fixes that twenty-year-old design bug.

— CUM Standards Consortium Technical Whitepaper, 2025

## Contributing

Yes. Fork this repo and make it worse.  
Pull requests accepted only if they increase token count by at least 420%.

Ideas already in the backlog:

- `CUM.COMPRESSION=none` mode (adds base64-encoded version of itself 69 times)
- Emoji-only field names
- Recursive self-reference until stack overflow

## License

Do What The Fuck You Want To Public License (WTFPL)  
With extra onions.
