'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  admissionNo: z.string().min(1, "Admission number is required"),
  course: z.string().min(1, "Course is required"),
  email: z.string().email("Invalid email address"),
  contactNo: z.string().min(8, "Contact number must be at least 8 digits"),
  withdrawalReason: z.string().min(1, "Withdrawal reason is required"),
  otherReasons: z.string().optional(),
  parentConsent: z.boolean().refine(value => value === true, {
    message: "Parent/Guardian consent is required for students under 21",
  }),
  discussedOptions: z.boolean(),
  libraryItems: z.enum(["returned", "outstanding", "other"]),
  libraryFines: z.enum(["settled", "outstanding"]),
  bursary: z.enum(["notApplicable", "hecbTier1", "hecbTier2", "hebTier1", "hebTier2"]),
  scholarship: z.enum(["noScholarship", "scholarshipRevoked"]),
  scholarshipDetails: z.object({
    awardName: z.string().optional(),
    academicYear: z.string().optional(),
    amountToRecover: z.string().optional(),
  }).optional(),
  matriculationCard: z.enum(["notCollected", "returning", "lost"]),
  studentPassHolder: z.boolean(),
});

// https://ui.shadcn.com/docs/components/form

const TPWithdrawalForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      admissionNo: "",
      course: "",
      email: "",
      contactNo: "",
      withdrawalReason: "",
      otherReasons: "",
      parentConsent: false,
      discussedOptions: false,
      libraryItems: "returned",
      libraryFines: "settled",
      bursary: "notApplicable",
      scholarship: "noScholarship",
      scholarshipDetails: {
        awardName: "",
        academicYear: "",
        amountToRecover: "",
      },
      matriculationCard: "returning",
      studentPassHolder: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="admissionNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Admission Number</FormLabel>
              <FormControl>
                <Input placeholder="Admission number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course</FormLabel>
              <FormControl>
                <Input placeholder="Your course" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contactNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Number</FormLabel>
              <FormControl>
                <Input placeholder="Your contact number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="withdrawalReason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Withdrawal Reason</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="W1">No interest in present course</SelectItem>
                  <SelectItem value="W2">Cannot cope with studies</SelectItem>
                  <SelectItem value="W4">Retaking/ Taking GCE O/ A Level</SelectItem>
                  <SelectItem value="WK">Personal (Family issues)</SelectItem>
                  <SelectItem value="WL">Personal (Financial Difficulties)</SelectItem>
                  <SelectItem value="W5">Taking up other tertiary courses</SelectItem>
                  <SelectItem value="WB">Enrol in another TP course</SelectItem>
                  <SelectItem value="W6">Decided to work instead</SelectItem>
                  <SelectItem value="W0">Work commitment</SelectItem>
                  <SelectItem value="WM">Personal (Medical Reasons)</SelectItem>
                  <SelectItem value="W7">Other reasons</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="otherReasons"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Reasons (if applicable)</FormLabel>
              <FormControl>
                <Input placeholder="Specify other reasons" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="parentConsent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Parent/Guardian Consent (for students below 21 years of age)
                </FormLabel>
                <FormDescription>
                  I am supportive of my child's/ward's withdrawal from the course at the Polytechnic.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="discussedOptions"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Discussed Options
                </FormLabel>
                <FormDescription>
                  I have discussed and explained the possible options for deferment, course transfer or reduced modular load options with the student.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="libraryItems"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Library Items</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="returned" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Returned all library items
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="outstanding" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Outstanding items
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="other" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Other
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="libraryFines"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Library Fines</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="settled" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Settled all outstanding fines
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="outstanding" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Outstanding fines
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bursary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bursary Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select bursary status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="notApplicable">Not applicable</SelectItem>
                  <SelectItem value="hecbTier1">HECB Tier 1 ($1,375)</SelectItem>
                  <SelectItem value="hecbTier2">HECB Tier 2 ($1,200)</SelectItem>
                  <SelectItem value="hebTier1">HEB Tier 1 ($950)</SelectItem>
                  <SelectItem value="hebTier2">HEB Tier 2 ($425)</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="scholarship"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Scholarship Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select scholarship status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="noScholarship">No scholarship to be revoked</SelectItem>
                  <SelectItem value="scholarshipRevoked">Scholarship to be revoked</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/*  https://react-hook-form.com/docs/useform/watch */}
        {form.watch("scholarship") === "scholarshipRevoked" && (
          <>
            <FormField
              control={form.control}
              name="scholarshipDetails.awardName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Scholarship Award Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Award name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="scholarshipDetails.academicYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Academic Year</FormLabel>
                  <FormControl>
                    <Input placeholder="Academic year" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="scholarshipDetails.amountToRecover"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount to Recover (S$)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Amount to recover" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <FormField
          control={form.control}
          name="matriculationCard"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Matriculation Card</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="notCollected" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      I did not collect the card (applicable to new student)
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="returning" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      I am returning my Matriculation Card together with this form
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="lost" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      I have lost the card. Should I find the card, I will return it to Student Services
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="studentPassHolder"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Student Pass Holder
                </FormLabel>
                <FormDescription>
                  I will return my Student Pass to the Immigration & Check-point Authority within 7 days upon withdrawal from the Polytechnic.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <FormField
          name="declaration"
          render={() => (
            <FormItem className="flex flex-col space-y-3">
              <FormLabel>Declaration</FormLabel>
              <FormControl>
                <>
                <div className="space-y-2">
                  <Checkbox id="consulted" />
                  <label htmlFor="consulted" className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    I have consulted my Care Person/ Course Chair.
                  </label>
                </div>
                <div className="space-y-2">
                  <Checkbox id="attendedClasses" />
                  <label htmlFor="attendedClasses" className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    I have not attended any classes since the start of the semester.
                  </label>
                </div>
                <div className="space-y-2">
                  <Checkbox id="tuitionGrant" />
                  <label htmlFor="tuitionGrant" className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    I understood the Tuition Grant which I have received for my diploma course in TP and previous course(s) will be taken into consideration when determining the remaining grant eligibility in the new course.
                  </label>
                </div>
                <div className="space-y-2">
                  <Checkbox id="infoAccurate" />
                  <label htmlFor="infoAccurate" className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    The information provided is true and accurate to the best of my knowledge and I have not deliberately omitted any relevant information.
                  </label>
                </div>
                </>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit Withdrawal Request</Button>
      </form>
    </Form>
  );
};

export default TPWithdrawalForm;