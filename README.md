# The Funniest Out of Office v2

[![The Funniest Out of Office](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![Rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/elpablo61/makefun-funniest-ooo-v2/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![Entries](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/elpablo61/makefun-funniest-ooo-v2/entries.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![Reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/elpablo61/makefun-funniest-ooo-v2/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)

A make.fun entry for [The Funniest Out of Office](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf): a single one-line out-of-office auto-reply, 140 characters or fewer, judged head to head on how hard it lands.

`main.ts` (Node 22) writes exactly one out-of-office line, 102 characters, to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). A deadpan auto-reply with a return date, one concrete number, and one logical twist.

## The line

> I'm away until Nov 30 for a wedding. I am the groom. The 214 unread emails can wait; the bride cannot.

## Run

```sh
node main.ts
cat /output/entry.txt
```
