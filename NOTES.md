# Notes — One Star for Monday

## The entry

> One star. Ordered the weekend, got served a Monday instead: cold coffee, dead Wi-Fi, and the waiter — me — crying into the bill.

128 characters (gate 1–180), 24 words (brief limit 25).

## Why this line

- **Reads as a real one-star restaurant review.** It opens with the rating,
  names what was ordered, and complains about the table: cold coffee, dead
  Wi-Fi, the bill.
- **Monday-specific.** The joke only works for Monday: the diner ordered the
  weekend and was served a Monday instead. It could not be about any other
  day of the week.
- **A real diner's complaint.** The waiter turns out to be the diner
  themselves — the person serving Monday is the person suffering it.
- **Short and quotable.** One sentence, retypeable into a group chat without
  trimming a word. Plain text, no hashtags, no stage directions.

## How it is built

`main.ts` holds the review in parts, joins them with single spaces, writes
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), then reads the file
back as raw bytes and refuses to finish unless every byte matches. It enforces
both the 1–180 character gate and the 25-word brief limit before exiting.
